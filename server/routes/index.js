import express from 'express'
import conn from '../conn'

const router = express.Router()

/* How to write get*/
router.get('/events', (req, res, next) => {
  const sql = `SELECT * FROM events`

  conn.query(sql, (error, results, fields) => {
    res.json(results)
  })
})
/* How to write post */
router.post('/events', (req, res, next) => {
  const sql = `INSERT INTO events (name)
            VALUES (?)`
  conn.query(sql,[req.body.name], (error, results, fields) => {
    console.log(results)
    res.json(results)
  })
})

export default router