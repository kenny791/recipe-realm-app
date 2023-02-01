import express from 'express'
import { RecipeModel, UserModel } from '../db.js'
import mongoose from 'mongoose'

const router = express.Router()

router.get("/recipes", async (request, response) => {
    try {
        const recipes = await RecipeModel.find()
            .populate({path: "author", select: "username"})
            .populate({path: "rating_list.username", select: "username"})
            .populate({path: "comments.username", select: "username"})
        response.send(recipes)
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

router.put("/recipes", async(request, response) => {
    try {
        // Create new recipe entry
        const { recipeId, name, author, description, tags, image, ingredients, method } = request.body
        const newRecipe = { 
            id: recipeId, 
            name: name, 
            author: author, 
            description: description, 
            rating_list: [], 
            tags: tags, 
            image: image || "http://placekitten.com/200/300", 
            ingredients: ingredients, 
            method: method, 
            comments: []}
        const insertedRecipe = await RecipeModel.create(newRecipe)
        // Send new entry with 201 status
        response.status(201).send(await insertedRecipe.populate({ path: 'author', select: ['_id', 'username']}))
    }
    catch (err) {
        response.status(500).send({ error: err.message })
    }
})

router.get("/recipes/:id", async (request, response) => {
    try{
        const recipe = await RecipeModel.findById(request.params.id)
            .populate({path: "author", select: "username"})
            .populate({path: "rating_list.username", select: "username"})
            .populate({path: "comments.username", select: "username"})
        if (recipe) {
            response.send(recipe)
        } else {
            response.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

//add new comment by username 
router.post("/recipes/:id/comments", async (request, response) => {
    try {
        const { username, comment } = request.body
        //find user id by username
        const userId = await UserModel.findOne( {username: request.body.username} ) 
        const  newComment = {
            username: userId._id,
            comment: request.body.comment
        }
        const recipe = await RecipeModel.findById(request.params.id)
        if (recipe) {
            recipe.comments.push(newComment)
            await recipe.save()
            response.send({
                message: "Comment added",
                comments: recipe.comments
              })
        } else {
            response.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

//add new rating by username 
router.post("/recipes/:id/rating", async (request, response) => {
    try {
        const { username, rating } = request.body
        //find user id by username
        const userId = await UserModel.findOne( {username: request.body.username} )
        const  newRating = {
            username: userId._id,
            rating: request.body.rating
        }
        const recipe = await RecipeModel.findById(request.params.id)
        if (recipe) {
            recipe.rating_list.push(newRating)
            await recipe.save()
            response.send(recipe.rating_list)
        } else {
            response.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

// Already done above
// router.post("/recipes", async (request, response) => {
//     try {
//         const { name, author, tags, ingredients, preparation, image } = request.body
//         const newRecipe = { name, author, tags, ingredients, preparation, image }
//         const insertedRecipe = await RecipeModel.create(newRecipe)
//         response.status(201).send(insertedRecipe)
//         console.log(insertedRecipe)
//     }
//     catch (err) {
//         response.status(500).send({error: err.message})
//     }
// })

//to be fixed
router.put("/recipes/:id", async (request, response) => {
    const { name,author } = request.body
    const updatedRecipe = { name,author }
    try {
        const recipe = await RecipeModel.findByIdAndUpdate(request.params.id, updatedRecipe, { returnDocument: "after" })
        if (recipe) {
            response.send(recipe)
        } else {
            response.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

router.patch("/recipes/:id", async (req, res) => {
    try {
        const recipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" })
        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({ message: "Recipe not found" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
        

//to be fixed
router.delete("/recipes/:id", async (request, response) => {
    try {
        const recipe = await RecipeModel.findByIdAndDelete(request.params.id)
        if (recipe) {
            response.send(recipe)
        } else {
            response.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})


//delete comment by recipe id and comment id
router.delete("/recipes/:recipeId/comments/:commentId", async (request, response) => {
    try {
        const recipe = await RecipeModel.findById(request.params.recipeId)
        if (recipe) {
            const commentIndex = recipe.comments.findIndex(
            comment => comment._id.toString() === request.params.commentId
            )
            if (commentIndex !== -1) {
                recipe.comments.splice(commentIndex, 1)
                await recipe.save()
                response.send({
                message: "Comment deleted",
                comments: recipe.comments
                })
            } else {
                response.status(404).send({ message: "Comment not found" })
            }
        } else {
            response.status(404).send({ message: "Recipe not found" })
        }
    } catch (err) {
        response.status(500).send({ error: err.message })
    }
})


// add new recipe alternate route
router.post("/addrecipes", async (request, response) => {
    try {
        const {recipeId, name, author, description, rating_list, tags, image, ingredients, method, comments} = request.body
        if (image.length < 1) {
            image = "http://placekitten.com/200/300"
          }
        const id = recipeId
        const newRecipe = {id, name, author, description, rating_list, tags, image, ingredients, method, comments }
        const insertedRecipe = await RecipeModel.create(newRecipe)
        response.status(201).send(insertedRecipe)
        console.log(insertedRecipe)
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})


export default router