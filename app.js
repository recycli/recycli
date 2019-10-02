const express = require('express')

const port = process.env.PORT || 3000

const app = express()
require('dotenv').config()

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => console.log(`Running on ${port}`))

