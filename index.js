const express = require('express')
require('dotenv').config()
require('./database/connection')

const TestRoute = require('./routes/testroute')
const CategoryRoute = require('./routes/categoryRoute')

const app = express()
const port = process.env.PORT

app.get('/home', (request, response)=>{
    return response.send('Welcome to the Home Page')
})

app.use(express.json())

app.use(TestRoute)
app.use(CategoryRoute)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`) 
})