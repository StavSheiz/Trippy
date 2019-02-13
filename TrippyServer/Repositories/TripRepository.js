const { executeQuery } = require('../DBAccess')

function addNewTrip(data){
    var query = `
        INSERT INTO public."TRIPS"
        VALUES(1,$1,$2,$3,$4,$5,$6)
    `
    const values= ['{"x": "4.6", "y":"7.8"}', '1999/09/09', '1999/09/09', "good good", [1,2], "" ];

    executeQuery(query, values);
}

module.exports = {addNewTrip};