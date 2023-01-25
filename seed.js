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
    {   
        name: "recipe name 1", 
        username: insertusers[0],
        tags: ["tag1", "tag2", "tag3"],
        ingredients: [
            "ingredient1", 
            "ingredient2", 
            "ingredient3"
        ],
        preparation: [
            "step1", 
            "step2", 
            "step3"
        ],
        image: "https://dummyimage.com/1000x500/"    
    },
    {   
        name: "recipe name 2", 
        username: insertusers[1],
        tags: ["tag1", "tag2", "tag3"],
        ingredients: [
            "ingredient1",
            "ingredient2",
            "ingredient3"
        ],
        preparation: [
            "step1",
            "step2",
            "step3"
        ],
        image: "https://dummyimage.com/1000x500/"
    },
    {
        name: "recipe name 3", 
        username: insertusers[2],
        tags: ["tag1", "tag2", "tag3"],
        ingredients: [
            "ingredient1", 
            "ingredient2", 
            "ingredient3"
        ],
        preparation: [
            "step1", 
            "step2", 
            "step3"
        ],
        image: "https://dummyimage.com/1000x500/"
    }
]

await RecipeModel.insertMany(recipes)
console.log("Recipes inserted")

dbClose()