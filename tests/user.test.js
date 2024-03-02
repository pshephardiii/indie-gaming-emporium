const request = require('supertest') 
const { MongoMemoryServer } = require('mongodb-memory-server') 
const app = require('../app-server') 
const User = require('../models/user') 
const mongoose = require('mongoose')
const server = app.listen(8080, () => console.log('Testing on Port 8080'))
let mongoServer 

beforeAll( async () => {
    mongoServer = await MongoMemoryServer.create()
    mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })
  })
  
  afterAll( async () => {
    await mongoose.connection.close() 
    mongoServer.stop()
    server.close() 
  })

describe('Test suite for the /users routes on our api', () => {
    test('It should create a new user in the database', async () => {
        const response = await request(app).post('/api/users').send({ name: 'Paul', email: 'paul@yahoo.com', password: 'paulpaulpaul' })

        expect(response.statusCode).toBe(200)
        
    })
})