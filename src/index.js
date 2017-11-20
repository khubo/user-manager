import express from 'express'
import winston from 'winston'
import { json } from 'body-parser'
import authorize from './controllers/authorization'

const app  = express()
const port = process.env.PORT || 1337

// middlewares
app.use(json())

// routes
app.get('/', (req, res) => {
  res.end('oye, port working fine!')
})

app.post('/authorize', authorize)

app.listen(port, () => {
  winston.info(`App started listening on port ${port}`)
})