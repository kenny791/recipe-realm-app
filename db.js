import mongoose from 'mongoose'

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
try{
    const m =await mongoose.connect("mongodb+srv://recipedevs:recipepassword@cluster0.qhtuc7n.mongodb.net/reciperealm?retryWrites=true&w=majority")
    console.log(m.connection.readyState === 1 ? "Connected to database" : "Failed to connect to database")
}
catch (err) {
    console.log(err)
}


//schemas
//defines the structure the model will need to conform to
const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: mongoose.ObjectId, ref: "User", required: true}
})

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})



//models
const RecipeModel = mongoose.model("Recipe", recipeSchema)

const UserModel = mongoose.model("User", userSchema)


export { dbClose, RecipeModel, UserModel }