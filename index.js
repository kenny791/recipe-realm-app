import express from 'express'
import { UserModel, RecipeModel } from './db.js'
import recipeRoutes from './routes/recipe_routes.js'
import cors from 'cors'

//create a new instance of express
const app = express()
//port number for the server to listen on
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())


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




import multer from 'multer'
import path from 'path'
import s3Upload2 from './s3service.js'


const storage = multer.memoryStorage()

const fileFilter = (request, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") {
        cb(null, true)
    } else {
        cb(new Error("Invalid file type"), false)
    }
}



const upload = multer({ storage, fileFilter, limits: { fileSize: 1000000 }, files : 1 })
app.post("/upload", upload.single("file"), async (request, response) => {
    const file = request.file
    const result = await s3Upload2(file)
    console.log(request.file.path + path.extname(request.file.originalname))
    response.json({message: "File uploaded", result: result})
})



app.use((error, request, response, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
            response.status(400).send("File too large")
        } else if (error.code === "LIMIT_UNEXPECTED_FILE") {
            response.status(400).send("Too many files")
        } else {
            response.status(400).send("File upload error")
        }
    }
})



app.use(recipeRoutes)

app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})