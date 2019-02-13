const { executeQuery } = require('../DBAccess')

function searchBestMatch(tripId){
    var query = `
        SELECT * 
        FROM public."TRIPS"
    `
    const values= [ ];

     var Trips = executeQuery(query, values);

    

    //console.log(myTrip);
    console.log(Trips);

}

module.exports = {searchBestMatch};

searchBestMatch(1);