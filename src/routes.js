import { Router } from 'express'
import { postValidate } from './validators/users'
import { addUser, getAllUser, getUser, deleteUser } from './controllers/users'
import { success, failure } from './helpers'

let router = Router()

router.post('/user', (req, res) => {
  if(!postValidate(req.body)) {
    console.log(postValidate.errors)
    return failure(res, postValidate.errors[0].message, 400)
  }
  addUser(req.body)
    .then(data => success(res, "Added user Successfully"))
    .catch(error => failure(res, "Error inputing data"))
})

router.get('/user', (req, res) => {
  getAllUser(req.query) 
    .then(data => success(res, data))
    .catch(e => failure(res, error))
})

router.get('/user/:id', (req, res) => {
  getUser(req.params.id) 
    .then(data => success(res, data))
    .catch(e => failure(res, "Failed retrieving data"))
})

router.delete('/user/:id', (req, res) => {
  deleteUser(req.params.id)
    .then(data => success(res, {}, 204))
    .catch(e => failure(res, "Failed deleting data"))
})


export default router