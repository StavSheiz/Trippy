
const express = require('express')
const router = express.Router()

const { executeQuery } = require('../DBAccess')

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/getIntrests', function (req, res) {
    executeQuery()
});

module.exports = router
