import Promise from 'bluebird'
import db from '../db'
import bcrypt from 'bcrypt'
import Buffer from 'buffer'

const table = 'users'

export const addUser = (user) => {
  if(user.password) {
    user.password = bcrypt.hashSync(user.password, bcry.genSaltSync(1))
  }
  if(user.profilePic) {
    user.profile_pic = Buffer.from(user.profilePic, 'base64')
    delete user.profilePic
  }
  return db(table).insert(user, ['*'])
}

export const modifyUser = (id, user) => {
  if(user.password) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(1))
  }
  if(user.profilePic) {
    user.profile_pic = Buffer.from(user.profilePic, 'base64')
    delete user.profilePic
  }
  return db(table).update(user, ['*']).where({id})
}

export const getAllUser = (opts) => {
  let limit = !isNaN(opts.limit) ? parseInt(opts.limit) : 100
  let offset = !isNaN(opts.offset) ? parseInt(opts.offset) : 0
  return db(table).select(['*']).limit(limit).offset(offset)
}

export const getUser = (id) => {
  return db(table).select(['username', 'email']).where({id})
}

export const deleteUser = (id) => {
  return db(table).where({id}).del()
}