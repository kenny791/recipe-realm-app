import express from 'express'

const users = [
    {username: "user1" },
    {username: "user2" },
    {username: "user3" }
]

const recipes = [
    {name: "recipe1", author: "user1"},
    {name: "recipe2", author: "user2"},
    {name: "recipe3", author: "user3"}
]

//create a new instance of express
const app = express()
//port number for the server to listen on
const port = 8080

app.use(express.json())

//route to send a string
app.get("/", (request, response) => response.send("<h2>Hello world!</h2>"))

//route to send test object
app.get("/object", (request, response) => response.send({message: "Hello world!"}))

app.get("/users", (request, response) => response.status(200).send(users))

app.get("/recipes", (request, response) => response.status(200).send(recipes))

app.get("/recipes/:id", (request, response) => {
    const recipe = recipes[request.params.id]
    if (recipe) {
        response.send(recipe)
    } else {
        response.status(404).send({message: "Recipe not found"})
    }
})

app.post("/users", (request, response) => {
    const { username } = request.body
    //sanitise the data
    const newUser = { username }
    users.push(newUser)
    response.status(201).send(newUser)

})



app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})