var express = require('express')
var router = express.Router()

router.get('/first', function (req, res) {
    res.send('first on user')
})

router.get('/second', function (req, res) {
    res.send('second on user')
})

module.exports = router
