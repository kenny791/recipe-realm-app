import express from 'express'
import { UserModel } from '../db.js'

const router = express.Router()


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


export default router