import express, { response } from 'express'
import { UserModel, RecipeModel } from './db.js'
import recipeRoutes from './routes/recipe_routes.js'
import userRoutes from './routes/user_routes.js'
import authRoutes from './routes/auth_routes.js'
import cors from 'cors'


//create a new instance of express
const app = express()
//port number for the server to listen on
const port = process.env.PORT || 8080

//json middleware
app.use(express.json())
//cors middleware
app.use(cors())

//routers for the different routes
app.use(recipeRoutes)
app.use(authRoutes)
app.use(userRoutes)




app.post("/users", (request, response) => {
    const { username } = request.body
    //sanitise the data
    const newUser = { username }
    users.push(newUser)
    response.status(201).send(newUser)

})



// AWS s3 upload route
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

//upload to file to s3
app.post("/:id/upload", upload.single("file"), async (request, response) => {
    const file = request.file
    const urlId = request.params.id
    const result = await s3Upload2(file, urlId)
    response.send(result.Location)
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





app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})