const { executeQuery } = require('../DBAccess')

function searchBestMatch(tripId){
    var query = `
        SELECT * 
        FROM public."TRIPS"
        WHERE "ID" = $1
    `
    const values= [ tripId ];

    console.log(executeQuery(query, values));
}

module.exports = {searchBestMatch};

//searchBestMatch(1);