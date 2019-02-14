const express = require('express')
const router = express.Router()

const {
    executeQuery
} = require('../DBAccess')
const {
    addNewTrip,
    addNewPartner
} = require('../Repositories/TripRepository')
const {
    getTripsForUser
} = require('../Repositories/UserRepositry')

router.get('/getIntrests', function (req, res) {
    executeQuery('select * from public."INTRESTS"').then((result) => {
        res.send(result);
    }, (err => {
        console.log(err)
    }))
});

router.post('/addNewTrip', function (req, res) {
    addNewTrip(req.body).then((result) => {
        res.send(result);
    }, (err => {
        console.log(err)
    }));
});

// tripId parameter
router.get('/findPartner', function (req, res) {
    searchBestMatch(req.params.tripId, res);
});

router.get('/addPartnerToTrip', function (req, res) {
    addNewPartner(req.data).then((result) => {
        res.send(result);
    }, (err => {
        console.log(err)
    }));
})

router.get('/getTripsForUser', function (req, res) {
    getTripsForUser(req.data).then((result) => {
        res.send(result);
    }, (err => {
        console.log(err)
    }));
})



module.exports = router