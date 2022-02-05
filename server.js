const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('isomorphic-fetch')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/v1/members', (req, res) => {
  const response = fetch('http://work.mediasmart.io/').then(async response => {
    const data = await response.text()
    console.log(data)
  })

  res.send({ response })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
