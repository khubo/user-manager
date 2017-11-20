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



