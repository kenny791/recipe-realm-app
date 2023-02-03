import app from '../app.js'
import request from 'supertest'

describe("Get all recipes", () => {
    let res
    beforeAll(async () => {
        res = await request(app).get("/recipes")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
    it("should return back back and array of json, with the standard recipe fields", () => {
        expect(res.body).toBeInstanceOf(Array)
        expect (res.body[0]).toBeInstanceOf(Object)
        expect(Object.keys(res.body[0])).toEqual(["_id", "id", "name", "author", "description","rating_list", "tags", "image", "ingredients", "method", "comments", "__v"]);
    })
    it("should have a recipe ids as a numbers", () => {
        expect(typeof res.body[0].id).toBe("number")
    })
    it("should have recipe names as strings", () => {
        expect(typeof res.body[0].name).toBe("string")
    })
    it("should have recipe authors as objects, with username, and _id properties", () => {
        expect(res.body[0].author).toBeInstanceOf(Object)
        expect(Object.keys(res.body[0].author)).toEqual(["_id", "username"]);
    })
    it("should have recipe descriptions as strings", () => {
        expect(typeof res.body[0].description).toBe("string")
    })
    it ("should have an array for ratings, with objects containing username and rating properties", () => {
        expect(res.body[0].rating_list).toBeInstanceOf(Array)
        expect(Object.keys(res.body[0].rating_list[0])).toEqual(["username", "rating","_id"])
    })
    it ("should have an array for tags that are strings", () => {
        expect(res.body[0].tags).toBeInstanceOf(Array)
        expect(typeof res.body[0].tags[0]).toBe("string")
    })
    it ("should have an image property that is a url", () => {
        expect(typeof res.body[0].image).toBe("string")
        expect(res.body[0].image).toMatch(/https/i || /http/i)
    })
    it ("should have an array for ingredients that are strings", () => {
        expect(res.body[0].ingredients).toBeInstanceOf(Array)
        expect(typeof res.body[0].ingredients[0]).toBe("string")
    })
    it ("should have an array for method that are strings", () => {
        expect(res.body[0].method).toBeInstanceOf(Array)
        expect(typeof res.body[0].method[0]).toBe("string")
    })
    it ("should have an array for comments that are objects with username, date, comment and _id properties", () => {
        expect(res.body[0].comments).toBeInstanceOf(Array)
        expect(Object.keys(res.body[0].comments[0])).toEqual(["username", "date",  "comment", "_id"])
    })
})

