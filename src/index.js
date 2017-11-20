import express from 'express'
import winston from 'winston'
import { json } from 'body-parser'
import db from './db'
import config from '../config'
import token from './controllers/authorization'
import authorize from './middlewares/authorization'
import routes from './routes'

const app  = express()
const port = process.env.PORT || 1337

// middlewares
app.use(json())


// routes
app.get('/', (req, res) => {
  res.send('oye, port working fine!')
})
app.post('/authorize', token)
app.use('/api', [authorize], routes)

//
db.migrate.latest()

app.listen(port, () => {
  winston.info(`App started listening on port ${port}`)
})