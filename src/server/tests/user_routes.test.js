import app from '../app.js'
import request from 'supertest'

let body 

describe("Get all users", () => {
    let res
    beforeAll(async () => {
        res = await request(app).get("/users")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
    it("should return an array of users", () => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body[0]).toBeInstanceOf(Object)
    })
})


describe("Get single user", () => {
    let res
    beforeAll(async () => {
        res = await request(app).get("/users/BakeBoss")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
        body = res.body
    })
    it("should have a favourites property which is an array", () => {
        expect(res.body.favourites).toBeDefined()
        expect(res.body.favourites).toBeInstanceOf(Array)
    })
    it("should respond with an object", () => {
        expect(res.body).toBeInstanceOf(Object)
    })
    it("should return 404 if user does not exist", async () => {
        const res = await request(app).get("/users/1231")
        expect(res.status).toBe(404)
    })
})

//update user favourites
describe("Update user favourites", () => {
    let res
    beforeAll(async () => {
        res = await request(app).patch(`/users/${body._id}`)
        .send({favourites: body.favourites})
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
        body = res.body
    })
    it("should return the updated user", () => {
        expect(res.body).toBeInstanceOf(Object)
    })
    it("should return 404 if user does not exist", async () => {
        const res = await request(app).patch("/users/111111111111111111111111")
        expect(res.status).toBe(404)
    })
    it("should return 500 if user id is not correct format", async () => {
        const res = await request(app).patch("/users/aaaaaaa")
        expect(res.status).toBe(500)
    })
})


//submit user favourites
describe("Replace user favourites", () => {
    let res
    beforeAll(async () => {
        res = await request(app).post(`/users/${body._id}/favourites`)
        .send({favourites: body.favourites})
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
    it("should return the updated user", () => {
        expect(res.body).toBeInstanceOf(Object)
    })
    it("should return 404 if user does not exist", async () => {
        const res = await request(app).post("/users/111111111111111111111111/favoruties")
        .send({favourites: body.favourites})
        expect(res.status).toBe(404)
    })
    it("should return 500 if user id is not correct format", async () => {
        const res = await request(app).post("/users/efefefr/favourites")
        .send({favourites: body.favourites})
        expect(res.status).toBe(500)
    })
})
