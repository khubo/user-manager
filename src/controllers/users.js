import Promise from 'bluebird'
import db from '../db'
import bcrypt from 'bcrypt'

const table = 'users'

export const addUser = (user) => {
  let salt = bcrypt.genSaltSync(1)
  let password = bcrypt.hashSync(user.password, salt)
  user.password = password
  return db(table).insert(user, ['*'])
}

export const getAllUser = (opts) => {
  let limit = !isNaN(opts.limit) ? parseInt(opts.limit) : 100
  let offset = !isNaN(opts.offset) ? parseInt(opts.offset) : 0
  return db(table).select(['*']).limit(limit).offset(offset)
}

