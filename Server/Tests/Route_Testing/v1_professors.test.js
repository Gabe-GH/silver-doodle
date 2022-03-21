const request = require('supertest')
const app = require('../../app')

/////////////////
// HAPPY PATHS //
/////////////////

/////////////////
// ROOT ROUTES //
/////////////////

describe('GET /', () => {
    test(`should respond with 'Hello World'`, async () => {
        const response = await request(app).get(`/`)
        expect(response.statusCode).toBe(201)
    })
});

describe('GET /', () => {
    test(`should respond with 'Hello World'`, async () => {
        return request(app)
            .get(`/`)
            .expect(201)
    })
});

//////////////////////
// PROFESSOR ROUTES //
//////////////////////

describe('GET /v1/professors', () => {
    test(`returns all professors`, async () => {
        const response = await request(app).get(`/v1/professors`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`All professors`)
    })
});

describe('GET /v1/professors/:professorId', () => {
    test(`returns one professor`, async () => {
        const response = await request(app).get(`/v1/professors/123`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Professor with id: 123`)
    })
});

describe('POST /v1/professors', () => {
    test(`returns a new professor`, async () => {
        const response = await request(app).post(`/v1/professors`)
            .send({
                text: "data"
            })

        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Create Professor success`)
    })
});

describe('PUT /v1/professors/:professorId', () => {
    test(`returns an updated professor`, async () => {
        const response = await request(app).put(`/v1/professors/123`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Updated Professor with id: 123`)
    })
});

describe('DELETE /v1/professors/:professorId', () => {
    test(`returns a deleted professor`, async () => {
        const response = await request(app).delete(`/v1/professors/123`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Deleted Professor with id: 123`)
    })
});

///////////////////
// REVIEW ROUTES //
///////////////////


describe('GET /v1/professors/:professorId/reviews', () => {
    test(`returns all reviews for one professors`, async () => {
        const response = await request(app).get(`/v1/professors/123/reviews`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`All reviews for professor with id: 123`)
    })
});

describe('GET /v1/professors/:professorId/reviews/reviewId', () => {
    test(`returns one reviews for one professors`, async () => {
        const response = await request(app).get(`/v1/professors/123/reviews/abc`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Comment with id: abc for professor with id: 123`)
    })
});

describe('POST /v1/professors/:professorId/reviews', () => {
    test(`returns a created review for one professor`, async () => {
        const response = await request(app).post(`/v1/professors/123/reviews`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Created review for professor with id: 123`)
    })
});

describe('PUT /v1/professors/:professorId/reviews/reviewId', () => {
    test(`returns an updated review for one professor`, async () => {
        const response = await request(app).put(`/v1/professors/123/reviews/abc`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Updated review with id: abc for professor with id: 123`)
    })
});

describe('DELETE /v1/professors/:professorId/reviews/reviewId', () => {
    test(`returns a deleted review for one professor`, async () => {
        const response = await request(app).delete(`/v1/professors/123/reviews/abc`)
        expect(response.statusCode).toBe(205)
        expect(response.body.message).toBe(`Deleted review with id: abc for professor with id: 123`)
    })
});

///////////////
// SAD PATHS //
///////////////

//////////////////////
// PROFESSOR ROUTES //
//////////////////////
describe('POST /v1/professors', () => {
    test(`returns an error when no data is recieved`, async () => {
        const response = await request(app).post(`/v1/professors/`)

        expect(response.statusCode).toBe(422)
        expect(response.body.message).toBe(`Create Professor failed`)
    })
})
