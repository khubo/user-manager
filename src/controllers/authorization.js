import winston from 'winston'
import jwt from 'jsonwebtoken'
import config from '../../config.json'
import { authorizationValidate } from '../validators/authorization'
import { success, failure } from '../helpers'

// Authorization post controller
export default (req, res) => {
  if(!authorizationValidate(req.body)) {
    winston.error('Invalid authorization request', authorizationValidate.errors)
    failure(res, 'Invalid request', 400)
  }

  let credentials = config.user

  if(credentials.username === req.body.username && credentials.password === req.body.password) {
    console.log(config.user)
    let token = jwt.sign({username: config.user.username}, config.jwtSecret)
    res.set('Authorization', token)
    success(res, "Success")    
  } else {
    res.statusCode = 401
    return res.send("Invalid credentials")
  }
}