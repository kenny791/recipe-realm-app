import app from '../app.js'
import request from 'supertest'

let body 

describe("Get all recipes", () => {
    let res
    beforeAll(async () => {
        res = await request(app).get("/recipes")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
    it("should return back and array of objects", () => {
        expect(res.body).toBeInstanceOf(Array)
        expect (res.body[0]).toBeInstanceOf(Object)
    })
})


describe("Get single recipe", () => {
    let res
    beforeAll(async () => {
        res = await request(app).get("/recipes/1")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
    it("should return back and array of json, with the standard recipe fields", () => {
        expect(res.body).toBeInstanceOf(Object)
        expect(Object.keys(res.body)).toEqual(["_id", "id", "name", "author", "description","rating_list", "tags", "image", "ingredients", "method", "comments", "__v"]);
    })
    it("should have a recipe ids as a numbers", () => {
        expect(typeof res.body.id).toBe("number")
    })
    it("should have recipe names as strings", () => {
        expect(typeof res.body.name).toBe("string")
    })
    it("should have recipe authors as objects, with username, and _id properties", () => {
        expect(res.body.author).toBeInstanceOf(Object)
        expect(Object.keys(res.body.author)).toEqual(["_id", "username"]);
    })
    it("should have recipe descriptions as strings", () => {
        expect(typeof res.body.description).toBe("string")
    })
    it ("should have an array for ratings, with objects containing username and rating properties", () => {
        expect(res.body.rating_list).toBeInstanceOf(Array)
        expect(Object.keys(res.body.rating_list[0])).toEqual(["username", "rating","_id"])
    })
    it ("should have an array for tags that are strings", () => {
        expect(res.body.tags).toBeInstanceOf(Array)
        expect(typeof res.body.tags[0]).toBe("string")
    })
    it ("should have an image property that is a url", () => {
        expect(typeof res.body.image).toBe("string")
        expect(res.body.image).toMatch(/https/i || /http/i)
    })
    it ("should have an array for ingredients that are strings", () => {
        expect(res.body.ingredients).toBeInstanceOf(Array)
        expect(typeof res.body.ingredients[0]).toBe("string")
    })
    it ("should have an array for method that are strings", () => {
        expect(res.body.method).toBeInstanceOf(Array)
        expect(typeof res.body.method[0]).toBe("string")
    })
    it ("should have an array for comments that are objects with username, date, comment and _id properties", () => {
        expect(res.body.comments).toBeInstanceOf(Array)
        expect(Object.keys(res.body.comments[0])).toEqual(["username", "date",  "comment", "_id"])
    })
})

describe("Post a new recipe", () => {
    let res
    beforeAll(async () => {
        res = await request(app).post("/recipes")
        .send({
            "recipeId": 100,
            "name": "test recipe",
            "author": "63da3dd8800ae18688c9df26",
            "description": "test description",
            "tags": ["tag1", "tag2"],
            "image": "",
            "ingredients": ["ingredient1", "ingredient2"],
            "method": ["method1", "method2"]
        })
        expect(res.status).toBe(201)
        expect(res.headers["content-type"]).toMatch(/json/i)
        body = res.body
    })
    it ("should return back the recipe in the format saved in the database as confirmation", () => {
        expect(res.body).toBeInstanceOf(Object)
        expect(Object.keys(res.body)).toEqual(["id", "name", "author", "description","rating_list", "tags", "image", "ingredients", "method", "comments", "_id", "__v"]);
    })
    it("should apply the default image if no image URL is sent", () => {
        expect(res.body.image).toMatch("https://res.cloudinary.com/dzz3meeb6/image/upload/v1675248494/Recipe%20Photos/image_a9nqqw.png")
    })
})    

describe("Add new rating to recipe", () => {
    let res
    beforeAll(async () => {
        res = await request(app).post(`/recipes/${body._id}/rating`)
        .send({
            "username": "BakeBoss",
            "rating": "4"
        })
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
    it("should return back the recipes array of ratings, with the new rating added", () => {
        expect(res.body).toBeInstanceOf(Array)
    })
})

describe("Edit a recipe", () => {
    let res
    beforeAll(async () => {
        res = await request(app).patch(`/recipes/${body.id}`)
        .send({
            "name": "test recipe 2",
            "description": "test description 2",
            "tags": ["tag3", "tag4"],
            "image": "",
            "ingredients": ["ingredient3", "ingredient4"],
            "method": ["method3", "method4"]
        })
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
    it("should return back the updated recipe", () => {
        expect(res.body).toBeInstanceOf(Object)
        expect(Object.keys(res.body)).toEqual(["_id","id", "name", "author", "description","rating_list", "tags", "image", "ingredients", "method", "comments", "__v"]);
    })
    it ("should return a 404 if the recipe id is not found", async () => {
        res = await request(app).patch("/recipes/123456789")
        expect(res.status).toBe(404)
    }) 
})

describe("Delete a recipe", () => {
    let res
    test ("should return a 202 status code if the recipe is deleted", async () => {
        res = await request(app).delete(`/recipes/${body.id}`)
        expect(res.status).toBe(202)
    })
})