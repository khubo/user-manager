import { Router } from 'express'
import { postValidate, putValidate } from './validators/users'
import { addUser, getAllUser, getUser, deleteUser, modifyUser } from './controllers/users'
import { success, failure } from './helpers'

let router = Router()

let dbErrorMessage = "Error carrying out db operation"

router.post('/user', (req, res) => {
  if(!postValidate(req.body)) {
    console.log(postValidate.errors)
    return failure(res, postValidate.errors[0].message, 400)
  }
  addUser(req.body)
    .then(data => success(res, "Added user Successfully"))
    .catch(error => failure(res, dbErrorMessage))
})

router.put('/user/:id', (req, res) => {
  if(!putValidate(req.body)) {
    console.log(putValidate.errors)
    return failure(res, putValidate.errors[0].message, 400)
  }
  modifyUser(req.params.id, req.body)
    .then(data => success(res, "Modified user successfully"))
    .catch(error => failure(res, dbErrorMessage))
})

router.get('/user', (req, res) => {
  getAllUser(req.query) 
    .then(data => success(res, data))
    .catch(e => failure(res, dbErrorMessage))
})

router.get('/user/:id', (req, res) => {
  getUser(req.params.id) 
    .then(data => success(res, data))
    .catch(e => failure(res, dbErrorMessage))
})

router.delete('/user/:id', (req, res) => {
  deleteUser(req.params.id)
    .then(data => success(res, {}, 204))
    .catch(e => failure(res, dbE))
})


export default router