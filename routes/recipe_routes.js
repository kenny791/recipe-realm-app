import express from 'express'
import { RecipeModel } from '../db.js'

const router = express.Router()



router.get("/recipes", async (request, response) => response.send( await RecipeModel.find().populate({path: "username", select: ["username"]}) ))


router.get("/recipes/:id", async (request, response) => {
    try{
        const recipe = await RecipeModel.findById(request.params.id)
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


router.post("/recipes", async (request, response) => {
    try {
        const { name,author } = request.body
        const newRecipe = { name,author }
        const insertedRecipe = await RecipeModel.create(newRecipe)
        response.status(201).send(insertedRecipe)
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})



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