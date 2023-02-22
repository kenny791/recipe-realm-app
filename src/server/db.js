import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


mongoose.set("strictQuery", true)

async function dbClose() {
    await mongoose.connection.close()
    console.log("Database disconnected")
}

//connect to the database
try {
    const m = await mongoose.connect(process.env.ATLAS_DB_URL)
    console.log(m.connection.readyState === 1 ? "Connected to database" : "Failed to connect to database")
}
catch (err) {
    console.log(err)
}


//recipe schema and model
const recipeSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    author: {type: mongoose.ObjectId, ref: "User", required: true},
    description: {type: String, required: true},
    rating_list: [{
        username: {type: mongoose.ObjectId, ref: "User", required: true},
        rating: {type: Number, required: true}
    }],
    tags: [{type: String}],
    image: {type: String, default: "https://res.cloudinary.com/dzz3meeb6/image/upload/v1675248494/Recipe%20Photos/image_a9nqqw.png"},
    ingredients: [{type: String}],
    method: [{type: String}],
    comments: [{
        username: {type: mongoose.ObjectId, ref: "User", required: true},
        date: {type: Date, required: true, default: Date.now},
        comment: {type: String, required: true}
    }]
})

const RecipeModel = mongoose.model("Recipe", recipeSchema)


//user schema and model
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    favourites: [{type: mongoose.ObjectId, ref: "Recipe"}]
})

const UserModel = mongoose.model("User", userSchema)


export { dbClose, RecipeModel, UserModel }