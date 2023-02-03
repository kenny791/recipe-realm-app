import app from '../app.js'
import request from 'supertest'

describe("Recipe routes tests", () => {
    test("Get all recipes", async () => {
        const res = await request(app).get("/recipes")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toMatch(/json/i)
    })
})
