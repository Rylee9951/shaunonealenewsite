import express from 'express'
import sha512 from 'sha512'
import conn from '../conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password).toString('hex')

  const sql = `SELECT id, username FROM users Where username = ? AND password = ?`

  conn.query(sql, [username, password], (err, results, feilds) =>{
    if(results.length > 0) {
      const token = jwt.sign({"username":username}, config.get('jwt.secret'))

      console.log(token)

      res.json({
        token: token
      })
    }else{
      res.status(401).json({
        message: 'Username or Password incorrect'
      })
    }
  })
})

export default router