const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('isomorphic-fetch')
const NodeCache = require('node-cache')
const { nextTick } = require('process')

const app = express()
const cache = new NodeCache({ stdTTL: 15 })
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const verifyCache = (req, res, next) => {
  try {
    const { page } = req.params

    if (cache.has(page)) {
      return res.status(200).json(cache.get(page))
    }
    return next()
  } catch (err) {
    throw new Error(err)
  }
}

app.get('/api/v1/members/page/:page', verifyCache, async (req, res) => {
  const { page } = req.params
  try {
    const { response, payload } = await fetch(
      `http://work.mediasmart.io/?page_size=34&page=${page}`,
      {
        headers: {
          Authorization: 'mediasmart2019',
        },
      }
    ).then(async response => ({
      response,
      payload: await response.json(),
    }))
    cache.set(page, payload)
    return res.status(response.status).json(payload)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
