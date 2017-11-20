import express from 'express'
import winston from 'winston'
import { json } from 'body-parser'
import db from './db'
import config from '../config'
import token from './controllers/authorization'
import authorize from './middlewares/authorization'
import logger from './middlewares/logger'
import routes from './routes'

const app  = express()
const port = process.env.PORT || 1337

// middlewares
app.use(json({ limit: '2mb'}))
app.use(logger)


// routes
app.get('/', (req, res) => {  res.send('Impatience is a vice young Jedi') })
app.post('/authorize', token)
app.use('/api', [authorize], routes)

app.use(function(req, res) {
  res.statusCode = 400;
  res.send("invalid url")
})
// knex migration
db.migrate.latest()

// start db
app.listen(port, () => {
  winston.info(`App started listening on port ${port}`)
})