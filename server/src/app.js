const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const cors = require('cors')
const app = express()

const port = config.port

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

require('./routes')(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})