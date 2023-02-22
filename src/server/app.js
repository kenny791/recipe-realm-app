import express, { response } from 'express'
import recipeRoutes from './routes/recipe_routes.js'
import userRoutes from './routes/user_routes.js'
import cors from 'cors'


//create a new instance of express
const app = express()


//json middleware
app.use(express.json())
//cors middleware
app.use(cors())

//routers for the different routes
app.use(recipeRoutes)
app.use(userRoutes)

// make route for /
app.get("/", (request, response) => response.send({ info: "Recipe Realm API" }))



export default app