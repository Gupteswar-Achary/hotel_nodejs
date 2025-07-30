const express = require('express')
const app = express()
const db = require('./db')
const personRouts = require('./routers/personRoutes')
const menuRouts = require('./routers/menuRoutes')
require('dotenv').config();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/person', personRouts)
app.use('/menu', menuRouts)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
