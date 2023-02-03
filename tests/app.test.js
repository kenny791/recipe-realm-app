import app from "../app.js"
import request from "supertest"

describe("App tests", () => {
    test("Get home page", async () => {
        const res = await request(app).get("/")
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        expect(res.body.info).toBeDefined()
        expect(res.body.info).toBe("Recipe Realm API")
    })
})