import express from 'express'
import { RecipeModel } from '../db.js'

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

//to be fixed
router.post("/recipes", async (request, response) => {
    try {
        const { name, author, tags, ingredients, preparation, image } = request.body
        const newRecipe = { name, author, tags, ingredients, preparation, image }
        const insertedRecipe = await RecipeModel.create(newRecipe)
        response.status(201).send(insertedRecipe)
        console.log(insertedRecipe)
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})


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
















export default router