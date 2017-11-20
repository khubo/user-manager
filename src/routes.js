import { Router } from 'express'

let router = Router()

router.get('/user', (req, res) => {
  res.send('request recieved at user')
})

export default router