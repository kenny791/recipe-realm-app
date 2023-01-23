import express from 'express'
import { UserModel, RecipeModel } from './db.js'

//create a new instance of express
const app = express()
//port number for the server to listen on
const port = 8080

app.use(express.json())

//route to send a string
app.get("/", (request, response) => response.send("<h2>Hello world!</h2>"))

//route to send test object
app.get("/object", (request, response) => response.send({message: "Hello world!"}))

app.get("/users", async (request, response) => response.send( await UserModel.find() ))

app.get("/recipes", async (request, response) => response.send( await RecipeModel.find().populate({path: "username", select: ["username"]}) ))


app.get("/recipes/:id", async (request, response) => {
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

app.post("/users", (request, response) => {
    const { username } = request.body
    //sanitise the data
    const newUser = { username }
    users.push(newUser)
    response.status(201).send(newUser)

})

app.post("/recipes", async (request, response) => {
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

app.put("/recipes/:id", async (request, response) => {
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

app.delete("/recipes/:id", async (request, response) => {
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




app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})