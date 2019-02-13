
const express = require('express')
const router = express.Router()

const { executeQuery } = require('../DBAccess')
const { addNewTrip } = require('../Repositories/TripRepository')

router.get('/getIntrests', function (req, res) {

    executeQuery('select * from public."INTRESTS"').then((result)=>{
        res.send(result);
    },(err => {console.log(err)}))
    
});

router.get('/addNewTrip', function(req, res){
    addNewTrip();
});

module.exports = router
