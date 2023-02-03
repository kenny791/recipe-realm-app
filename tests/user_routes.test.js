import app from '../app.js'
import request from 'supertest'

describe("User routes tests", () => {
    test("Get all users", async () => {
        const res = await request(app).get("/users")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
})

describe("Get single user info", () => {
    test("Get single user", async () => {
        const res = await request(app).get("/users/WhiskWizard")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
        expect(res.body.favourites).toBeDefined()
        expect(res.body.favourites).toBeInstanceOf(Array)
        expect(res.body.favourites[0]).toHaveProperty("name")
        expect(res.body.favourites[0]).toHaveProperty("id")
        expect(res.body.favourites[0]).toHaveProperty("image")
        expect(res.body.favourites[0]).toHaveProperty("description")
    })
})

