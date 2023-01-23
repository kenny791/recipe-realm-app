import express from 'express'
import mongoose from 'mongoose'



/* //db creation code
use ("reciperealm")
db.users.insertMany([
  {username: "user1", password: "password1"},
  {username: "user2", password: "password2"},
  {username: "user3", password: "password3"}
]) 
*/



//connect to the database
mongoose.connect("mongodb+srv://recipedevs:recipepassword@cluster0.qhtuc7n.mongodb.net/reciperealm?retryWrites=true&w=majority")
    .then((m) => console.log(m.connection.readyState === 1 ? "Connected to database" : "Failed to connect to database"))
    .catch((err) => console.log(err))



//schemas
//defines the structure the model will need to conform to
const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: {type: String, required: true}
})

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})



//models
const RecipeModel = mongoose.model("Recipe", recipeSchema)
const UserModel = mongoose.model("User", userSchema)



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

app.get("/recipes", async (request, response) => response.send( await RecipeModel.find() ))

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






app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})