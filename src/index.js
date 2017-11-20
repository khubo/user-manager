import express from 'express'
import winston from 'winston'

const app  = express()
const port = process.env.PORT || 1337

// routes
app.get('/', (req, res) => {
  res.end('oye, port working fine!')
})

app.listen(port, () => {
  winston.info(`App started listening on port ${port}`)
})