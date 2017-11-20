import { Router } from 'express'
import { postValidate } from './validators/users'
import { addUser, getAllUser } from './controllers/users'
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

export default router