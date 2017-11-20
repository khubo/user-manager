import winston from 'winston'

export default (req, res, next) => {
  winston.info(` ${Date.now()} - recieved request at ${req.path}`)
  next()
}