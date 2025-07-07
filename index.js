const express = require('express')
require('dotenv').config()

const TestRoute = require('./routes/testroute')

const app = express()
const port = process.env.PORT

app.get('/home', (request, response)=>{
    return response.send('Welcome to the Home Page')
})

app.use(TestRoute)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`) 
})