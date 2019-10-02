const express = require('express')

const port = process.env.PORT || 3000

const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => console.log(`Running on ${port}`))

