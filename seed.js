import { UserModel, RecipeModel, dbClose } from "./db.js"

await RecipeModel.deleteMany()
console.log("Recipes deleted")
await UserModel.deleteMany()
console.log("Users deleted")

const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" }
]

const insertusers = await UserModel.insertMany(users)
console.log("Users inserted")

const recipes = [
    { name: "recipe name 1", author: insertusers[0]},
    { name: "recipe name 2", author: insertusers[1]},
    { name: "recipe name 3", author: insertusers[2]}
]

await RecipeModel.insertMany(recipes)
console.log("Recipes inserted")

dbClose()