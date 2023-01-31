import express from 'express'
import { UserModel, RecipeModel } from '../db.js'

const router = express.Router()


// router.get("/users", async (request, response) => response.send( await UserModel.find() ))

//get all users
router.get("/users", async (request, response) => {
    try {
        const users = await UserModel.find()
        response.send(users)
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

//get user by id or username
router.get("/users/:val", async (request, response) => {
    try{
        const user = await UserModel.findOne( {username: request.params.val} )
        .select("-password")
        .populate({path: "favourites", select: "name id image"})
        if (user) {
            response.send(user)
        } 
        else if (request.params.val.length === 24) {
            const user = await UserModel.findById(request.params.val)
            .select("-password")
            .populate({path: "favourites", select: "name"})
            if (user) {
                response.send(user)
            }
        }
        else {
            response.status(404).send({message: "User not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

//get comments by one user
router.get("/users/:id/comments", async (request, response) => {
    try{
        const recipe = await RecipeModel.findOne( {username: request.params.id} )
    if (recipe) {
        response.send(recipe.comments)
    } else {
        response.status(404).send({message: "Comments not found"})
    }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})


//replace favourites array of user
router.post("/users/:userId/favourites", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(
            req.params.userId,
            { favourites: req.body.favourites },
            { new: true }
        )
        res.send(user)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }

})
export default router