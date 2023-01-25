import express from 'express'
import { UserModel } from '../db.js'

const router = express.Router()

//login
router.post("/login", async (request, response) => {
    try {
        const { username, password } = request.body
        const user = { username, password }
        const foundUser = await UserModel.findOne(user)
        if (foundUser) {
            response.send(foundUser)
        } else {
            response.status(404).send({message: "User not found"})
        }
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})

//register
router.post("/register", async (request, response) => {
    try {
        const { username, password } = request.body
        const newUser = { username, password }
        const insertedUser = await UserModel.create(newUser)
        response.status(201).send(insertedUser)
    }
    catch (err) {
        response.status(500).send({error: err.message})
    }
})





export default router