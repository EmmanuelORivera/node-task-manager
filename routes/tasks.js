const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  res.json('all items')
})

module.exports = router
