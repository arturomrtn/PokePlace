const express = require('express')
const router = express.Router()

// Endpoints
router.get('/api', (req, res) => res.json('pages/index'))


module.exports = router
