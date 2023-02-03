import express from 'express'
import { RecipeModel, UserModel } from '../db.js'


const router = express.Router()

// Get all recipes
router.get("/recipes", async (req, res) => {
    try {
        const recipes = await RecipeModel.find()
            .populate({path: "author", select: "username"})
            .populate({path: "rating_list.username", select: "username"})
            .populate({path: "comments.username", select: "username"})
        res.send(recipes)
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
})

// Post new recipe
router.post("/recipes", async (req, res) => {
    try {
        // Create new recipe entry
        const { recipeId, name, author, description, tags, image, ingredients, method } = req.body
        const newRecipe = { 
            id: recipeId, 
            name: name, 
            author: author,
            description: description, 
            rating_list: [], 
            tags: tags, 
            image: image || "https://res.cloudinary.com/dzz3meeb6/image/upload/v1675248494/Recipe%20Photos/image_a9nqqw.png", 
            ingredients: ingredients, 
            method: method, 
            comments: []}
        const insertedRecipe = await RecipeModel.create(newRecipe)
        // Send new entry with 201 status
        res.status(201).send(await insertedRecipe.populate({ path: 'author', select: ['_id', 'username']}))
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

// Get recipe by id
router.get("/recipes/:id", async (req, res) => {
    try{
        const recipe = await RecipeModel.findOne({ id: req.params.id })
            .populate({path: "author", select: "username"})
            .populate({path: "rating_list.username", select: "username"})
            .populate({path: "comments.username", select: "username"})
        if (recipe) {
            res.send(recipe)
        } else {
            res.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
})

//add new comment by username 
// router.post("/recipes/:id/comments", async (req, res) => {
//     try {
//         const { username, comment } = req.body
//         //find user id by username
//         const userId = await UserModel.findOne( {username: username} ) 
//         const  newComment = {
//             username: userId._id,
//             date: Date.now(),
//             comment: comment
//         }
//         const recipe = await RecipeModel.findOne({ id: req.params.id })
//         if (recipe) {
//             recipe.comments.push(newComment)
//             await recipe.save()
//             res.send({
//                 message: "Comment added",
//                 comments: recipe.comments
//               })
//         } else {
//             res.status(404).send({message: "Recipe not found"})
//         }
//     }
//     catch (err) {
//         res.status(500).send({error: err.message})
//     }
// })

// Add new rating by username 
router.post("/recipes/:id/rating", async (req, res) => {
    try {
        const { username, rating } = req.body
        //find user id by username
        const userId = await UserModel.findOne( {username: req.body.username} )
        const  newRating = {
            username: userId._id,
            rating: req.body.rating
        }
        const recipe = await RecipeModel.findById(req.params.id)
        if (recipe) {
            recipe.rating_list.push(newRating)
            await recipe.save()
            res.send(recipe.rating_list)
        } else {
            res.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
})

// Edit single recipe
router.patch("/recipes/:id", async (req, res) => {
    try {
        // const { recipeId, name, author, description, tags, image, ingredients, method } = req.body
        const { name, description, tags, image, ingredients, method } = req.body
        const editedEntry = { name, description, tags, image, ingredients, method }
        const entry = await RecipeModel.findOneAndUpdate({id: req.params.id}, editedEntry, { returnDocument: 'after' })
        if (entry) {
            res.send(entry)
        } else {
            res.status(404).send({ error: 'Entry not found'})
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message})
    }
})

// For updating comments and ratings
router.patch("/recipes/edit/:id", async (req, res) => {
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

// Delete single recipe
router.delete("/recipes/:id", async (req, res) => {
    try {
        const recipe = await RecipeModel.findOneAndDelete({ id: req.params.id })
        if (recipe) {
            res.sendStatus(202)
        } else {
            res.status(404).send({message: "Recipe not found"})
        }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
})


// Delete comment by recipe id and comment id
router.delete("/recipes/:recipeId/comments/:commentId", async (req, res) => {
    try {
        const recipe = await RecipeModel.findById(req.params.recipeId)
        if (recipe) {
            const commentIndex = recipe.comments.findIndex(
            comment => comment._id.toString() === req.params.commentId
            )
            if (commentIndex !== -1) {
                recipe.comments.splice(commentIndex, 1)
                await recipe.save()
                res.send({
                message: "Comment deleted",
                comments: recipe.comments
                })
            } else {
                res.status(404).send({ message: "Comment not found" })
            }
        } else {
            res.status(404).send({ message: "Recipe not found" })
        }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

export default router