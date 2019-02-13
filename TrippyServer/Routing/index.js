
const express = require('express')
const router = express.Router()

const { executeQuery } = require('../DBAccess')
const { addNewTrip, addNewPartner } = require('../Repositories/TripRepository')
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



module.exports = router
