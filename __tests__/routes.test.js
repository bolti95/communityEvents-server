const app = require('../app');
const request = require("supertest");
const Events = require('../testData');


describe('routes test', () => {
    test('index GET response with 200 status code', async() => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200)
    })
    test('events GET response with 200 status code', async() => {
        const response = await request(app).get("/events");
        expect(response.statusCode).toBe(200)
    })
    test('GET event', async () => {
        const response = await app.get("events/create", (req, res) => {
            res.status(200).json(Events)
            console.log(Events)
        })
        expect((response) => {
            response.json = Events
        })
    })
})

    // test('POST response should use Event', async () => {
    //     const toSend = Events[0]
    //     const response = await request(app).post("/events/create").send({
    //         toSend
    //     })
    //     expect(response.statusCode).toBe(200)
    // })
        // const response = await request(app).get("/events/create")
        // response.status(200).json(Events)
        // expect(response).toBe(Events)

  