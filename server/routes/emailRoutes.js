const express = require('express')

const router = express.Router()

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

//
router.get('/:id', (req, res) => {
  let id = 1
  db.getEmailById(id)
    .then((email) => {
      console.log(email)
      res.json(email)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('server error')
    })
})

module.exports = router
