import fs from 'fs'
import bcrypt from 'bcrypt'
import Promise from 'bluebird'
import db from '../db'

const writeFile = Promise.promisify(fs.writeFile)
const table = 'users'

export const addUser = (user) => {
  return Promise.coroutine(function * () {
    if (user.password) {
      let salt = yield bcrypt.genSalt(1)
      user.password = yield bcrypt.hash(user.password, salt)
    }
    if (user.profilePic) {
      let picture = new Buffer(user.profilePic, 'base64')
      let path = `./images/${user.username}.jpg`
      yield writeFile(path, picture)
      delete user.profilePic
      user.profile_pic = path
    }
    return db(table).insert(user, ['*'])
  })()
}

export const modifyUser = (id, user) => {
  return Promise.coroutine(function * () {
    if (user.password) {
      let salt = yield bcrypt.genSalt(1)
      user.password = yield bcrypt.hash(user.password, salt)
    }
    if (user.profilePic) {
      let picture = new Buffer(user.profilePic, 'base64')
      let path = `./images/${user.username}.jpg`
      yield writeFile(path, picture)
      delete user.profilePic
      user.profile_pic = path
    }
    return db(table).insert(user, ['*'])
  })()
}

export const getAllUser = (opts) => {
  let limit = !isNaN(opts.limit) ? parseInt(opts.limit) : 100
  let offset = !isNaN(opts.offset) ? parseInt(opts.offset) : 0
  return db(table).select(['username', 'email', 'profile_pic']).limit(limit).offset(offset)
}

export const getUser = (id) => {
  return db(table).select(['username', 'email', 'profile_pic']).where({id})
}

export const deleteUser = (id) => {
  return db(table).where({id}).del()
}
