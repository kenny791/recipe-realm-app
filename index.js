import express from 'express'
import { UserModel, RecipeModel } from './db.js'
import recipeRoutes from './routes/recipe_routes.js'

//create a new instance of express
const app = express()
//port number for the server to listen on
const port = 8080

app.use(express.json())

//make routes relative
app.use ("/recipes", recipeRoutes)


//route to send a string
app.get("/", (request, response) => response.send("<h2>Hello world!</h2>"))

//route to send test object
app.get("/object", (request, response) => response.send({message: "Hello world!"}))

app.get("/users", async (request, response) => response.send( await UserModel.find() ))



app.post("/users", (request, response) => {
    const { username } = request.body
    //sanitise the data
    const newUser = { username }
    users.push(newUser)
    response.status(201).send(newUser)

})




app.use(recipeRoutes)

app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})