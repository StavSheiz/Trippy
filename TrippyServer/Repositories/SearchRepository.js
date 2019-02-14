const { executeQuery } = require('../DBAccess')
const converter = require("../Convertion/TripMapping")
const searchUtils = require("../SearchLogics/PartnersSearch")

function searchBestMatch(tripId, response){
    var query = `
        SELECT  "TRIPS".ID, 
                "TRIPS".LOCATION, 
                "TRIPS".START_DATE, 
                "TRIPS".END_DATE, 
                "TRIPS".DETAILS, 
                "TRIPS".INTRESTS, 
                "TRIPS".IMG,
                USER_ID,
                "USERS".NAME,
                "USERS".IMG

        FROM public."TRIPS"
        INNER JOIN public."TRIP_USER" ON "TRIP_USER".TRIP_ID = "TRIPS".ID
        INNER JOIN public."USERS" ON "TRIP_USER".USER_ID = "TRIP_USER".ID
    `
    const values= [ ];

     executeQuery(query, values).then((res)=> {

        var trips = converter.mapTripsWithUser(res);
        var myTrip = trips.filter((t)=>{ t.Id == tripId});
        var OtherTrips = trips.filter((t)=>{ t.Id != tripId});


        var recomndation = searchUtils.findBestPartner(myTrip, OtherTrips);

        response.send(recomndation);
    });

}

module.exports = {searchBestMatch};

searchBestMatch(1);