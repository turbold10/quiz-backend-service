const express = require('express')
const cors = require('cors')
const connectDatabase = require('./utils/connectdb.js')
const factRoute = require('./routes/factRoute.js')
const userRoute = require('./routes/userRoute.js')

const app = express()
const port = 8080
app.use(express.json())
app.use(cors())

app.use(userRoute);
app.use(factRoute)

connectDatabase()

app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})