const { executeQuery } = require('../DBAccess')

function searchBestMatch(tripId){
    var query = `
        SELECT * 
        FROM public."TRIPS"
    `
    const values= [ ];

     executeQuery(query, values).then((trips)=>{

    

        console.log(trips);
        console.log('*********************');
     });

}

module.exports = {searchBestMatch};

searchBestMatch(1);