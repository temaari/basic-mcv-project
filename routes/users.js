const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from users')
})

router.get('/new', (req, res) => {
    res.send('Create new user')
})

module.exports = router