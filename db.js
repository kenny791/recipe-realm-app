import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

/* //db creation code to be used in mongo db playground for reference
use ("reciperealm")
db.users.insertMany([
  {username: "user1", password: "password1"},
  {username: "user2", password: "password2"},
  {username: "user3", password: "password3"}
]) 
*/

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



//defines the structure the model will need to conform to
//recipe schema and model
const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: {type: mongoose.ObjectId, ref: "User", required: true},
    description: {type: String, required: true},
    ratings: [{
        username: {type: mongoose.ObjectId, ref: "User", required: true},
        rating: {type: Number, required: true}
    }],
    tags: [{type: String}],
    image: {type: String, default: "https://placekitten.com/g/600/400"},
    ingredients: [{type: String}],
    method: [{type: String}],
    comments: [{type: mongoose.ObjectId, ref: "Comment"}]
})

const RecipeModel = mongoose.model("Recipe", recipeSchema)


//user schema and model
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    favourites: [{type: mongoose.ObjectId, ref: "Recipe"}]
})

const UserModel = mongoose.model("User", userSchema)


//comment schema and model
const commentSchema = new mongoose.Schema({
    username: {type: String, required: true, default: "Anonymous"},
    recipeId: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
})

const CommentModel = mongoose.model("Comment", commentSchema)



export { dbClose, RecipeModel, UserModel, CommentModel }