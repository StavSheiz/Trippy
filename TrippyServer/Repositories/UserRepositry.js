const { executeQuery } = require('../DBAccess')

function getTripsForUser(data){
    let query =`
        SELECT DISTINCT t."ID", t."LOCATION", t."START_DATE", t."END_DATE", t."DETAILS", t."INTRESTS", t."IMG", tu."IS_OWNER"
        FROM public."TRIP_USER" tu,
            public."TRIPS" t
        WHERE tu."TRIP_ID" = t."ID" AND
              tu."USER_ID" = $1
    `
    const values=[1000]

    return executeQuery(query, values)
}

function addNewSwipe(data){
    let query =`
    INSERT INTO public."PARTNERS_SUGGESTIONS"(
        "OWNER_TRIP_ID", "PARTNER_TRIP_ID", "WANTED")
        VALUES ($1, $2, $3);
    `
    const values=[req.params.ownerId,req.params.partnerId,req.params.wanted==0]

    return executeQuery(query, values)
}

module.exports = {getTripsForUser, addNewSwipe};