import express from 'express'
import conn from '../conn'

const router = express.Router()

router.get('/user', (req, res, next) => {
  res.json({
    'Yourin' : true
  })
})

export default router