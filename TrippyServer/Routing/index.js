const express = require('express')
const router = express.Router()

const {
    executeQuery
} = require('../DBAccess')
const {
    addNewTrip,
    addNewPartner,
    getTripPartners
} = require('../Repositories/TripRepository')
const {
    getTripsForUser
} = require('../Repositories/UserRepositry')
const {
    searchBestMatch
} = require('../Repositories/SearchRepository')

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
router.post('/findPartners', function (req, res) {
    searchBestMatch(req.body.tripId, res)
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

router.get('/getWantedPartners', function (req, res) {
    getWantedPartners(req.params.tripId).then((result) => {
        res.send(result);
    }, (err => {
        console.log(err)
    }));
})

router.get('/addNewSwipe', function (req, res) {
    addNewSwipe(req.params).then((result) => {
        res.send(result);
    }, (err => {
        console.log(err)
    }));
})


module.exports = router