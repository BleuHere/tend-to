const express = require('express')

const router = express.Router()

// eslint-disable-next-line no-unused-vars
const db = require('../db/emails')

router.get('/:id', (req, res) => {
  db.getEmailById(req.params.id)
    .then((email) => {
      res.json(email)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('server error')
    })
})

module.exports = router
