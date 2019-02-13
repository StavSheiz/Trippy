
const express = require('express')
const router = express.Router()

const { executeQuery } = require('../DBAccess')
const { addNewTrip, addNewPartner } = require('../Repositories/TripRepository')

router.get('/getIntrests', function (req, res) {
    executeQuery('select * from public."INTRESTS"').then((result)=>{
        res.send(result);
    },(err => {console.log(err)}))    
});

router.get('/addNewTrip', function(req, res){
    addNewTrip();
});

router.get('/findPartner', function(req, res){
    searchBestMatch();
});

router.get('/addPartnerToTrip', function(req, res){
    addNewPartner(req.data);
})

module.exports = router
