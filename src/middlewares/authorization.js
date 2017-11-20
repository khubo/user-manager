import jwt from 'jsonwebtoken'
import Promise from 'bluebird'
import config from '../../config'
import { success, failure } from '../helpers'

const verify = Promise.promisify(jwt.verify)

export default (req, res, next) => {
  let token = req.header && req.headers.authorization
  if (token) {
    verify(token, config.jwtSecret)
      .then(decoded => {
        if (decoded.username === config.user.username) {
          return next()
        } else {
          return failure(res, 'Invalid token', 401)
        }
      })
      .catch(e => {
        return failure(res, 'Invalid token', 401)
      })
  } else {
    return failure(res, 'No authorization header present', 400)
  }
}
