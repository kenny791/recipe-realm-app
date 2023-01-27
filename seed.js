import { UserModel, RecipeModel, CommentModel, dbClose } from "./db.js"

await RecipeModel.deleteMany()
console.log("Recipes deleted")
await UserModel.deleteMany()
console.log("Users deleted")

const users = [
    { username: "user1", password: "password1", favourites: []},
    { username: "user2", password: "password2", favourites: []},
    { username: "user3", password: "password3", favourites: []}
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

const insertrecipes = await RecipeModel.insertMany(recipes)
console.log("Recipes inserted")

const userswithfavs = [
    { username: "user4", password: "password4", favourites: [insertrecipes[0], insertrecipes[1]]},
    { username: "user5", password: "password5", favourites: [insertrecipes[1], insertrecipes[2]]},
    { username: "user6", password: "password6", favourites: [insertrecipes[0], insertrecipes[2]]}
]

await UserModel.insertMany(userswithfavs)
console.log("Users with favourites inserted")


const comments = [
    {
        username: "user1",
        recipeId: "5f9f1b1b1b1b1b1b1b1b1b1b",
        message: "lore ipsum dolor sit amet 1",
        date: "2022-01-01"
    },
    {
        username: "user1",
        recipeId: "5f9f1b1sfsfdsfsdfsfsfsfsf",
        message: "lore ipsum dolor sit amet 11",
        date: "2022-01-02"
    },
    {
        username: "user2",
        recipeId: "5f9f1b1b1b1b1b1b1b1b1b1b",
        message: "lore ipsum dolor sit amet 2",
        date: "2022-02-02"
    },
    {
        username: "user2",
        recipeId: "5f9f1b1sfsfdsfsdfsfsfsfsf",
        message: "lore ipsum dolor sit amet 22",
        date: "2022-01-03"
    },
    {
        username: "user3",
        recipeId: "5f9f1b1b1b1b1b1b1b1b1b1b",
        message: "lore ipsum dolor sit amet 3",
        date: "2022-03-03"
    },
    {
        username: "user3",
        recipeId: "5f9f1b1sfsfdsfsdfsfsfsfsf",
        message: "lore ipsum dolor sit amet 33",
        date: "2022-01-04"
    }
]

await CommentModel.insertMany(comments)
console.log("Comments inserted")

dbClose()