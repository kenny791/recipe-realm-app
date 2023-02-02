import express, { response } from 'express'
import { UserModel, RecipeModel } from './db.js'
import recipeRoutes from './routes/recipe_routes.js'
import userRoutes from './routes/user_routes.js'
import authRoutes from './routes/auth_routes.js'
import cors from 'cors'


//create a new instance of express
const app = express()


//json middleware
app.use(express.json())
//cors middleware
app.use(cors())

//routers for the different routes
app.use(recipeRoutes)
app.use(authRoutes)
app.use(userRoutes)



//port number for the server to listen on
const port = process.env.PORT || 8080

app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})