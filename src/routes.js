import { Router } from 'express'
import { postValidate } from './validators/users'
import { addUser } from './controllers/users'
import { success, failure } from './helpers'

let router = Router()

router.post('/user', (req, res) => {
  if(!postValidate(req.body)) {
    console.log(postValidate.errors)
    return failure(res, postValidate.errors[0].message, 400)
  }
  addUser(req.body)
    .then(data => success(res, "Added user Successfully"))
    .catch(error => failure(res, error))
})

router.get('/user', (req, res) => {
  res.send('request recieved at user')
})

export default router