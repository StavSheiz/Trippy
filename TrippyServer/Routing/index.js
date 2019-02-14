
const express = require('express')
const router = express.Router()

const { executeQuery } = require('../DBAccess')
const { addNewTrip, addNewPartner, getWantedPartners } = require('../Repositories/TripRepository')
const { getTripsForUser } = require('../Repositories/UserRepositry')

router.get('/getIntrests', function (req, res) {
    executeQuery('select * from public."INTRESTS"').then((result)=>{
        res.send(result);
    },(err => {console.log(err)}))    
});

router.get('/addNewTrip', function(req, res){
    addNewTrip().then((result)=>{
        res.send(result);
    },(err => {console.log(err)}))    ;
});

// tripId parameter
router.get('/findPartner', function(req, res){
    searchBestMatch(req.params.tripId, res);
});

router.get('/addPartnerToTrip', function(req, res){
    addNewPartner(req.data).then((result)=>{
        res.send(result);
    },(err => {console.log(err)}))    ;
})

router.get('/getTripsForUser', function(req,res){
    getTripsForUser(req.data).then((result)=>{
        res.send(result);
    },(err => {console.log(err)}))    ;
})

router.get('/getWantedPartners', function(req,res){
    getWantedPartners(req.params.tripId).then((result)=>{
        res.send(result);
    },(err => {console.log(err)}))    ;
})


module.exports = router
