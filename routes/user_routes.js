import express from 'express'
import { UserModel } from '../db.js'

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

//get user by id
router.get("/users/:id", async (request, response) => {
    try{
        const user = await UserModel.findById(request.params.id)
        if (user) {
            response.send(user)
        } else {
            response.status(404).send({message: "User not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})



export default router