import express from 'express'

//create a new instance of express
const app = express()
//port number for the server to listen on
const port = 8080



//route to send a string
app.get("/", (request, response) => response.send("<h2>Hello world!</h2>"))

//route to send test object
app.get("/object", (request, response) => response.send({message: "Hello world!"}))





app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})