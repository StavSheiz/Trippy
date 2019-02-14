const { executeQuery } = require('../DBAccess')

function addNewTrip(data){
    var query = `
        INSERT INTO public."TRIPS"
        VALUES(nextval('trips_seq'),$1,$2,$3,$4,$5,$6)
    `
    const values= [data.Location, data.StartDate, data.EndDate, data.Details, data.Intereses, data.Img];

    return executeQuery(query, values);
}

function addNewPartner(data){
    var query = `
        INSERT INTO public."TRIP_USER"
        VALUES($1,$2,false)
    `
    const values=[data["trip"],data["user"]];
    return executeQuery(query, values);
}
function getWantedPartners(tripId){
    let query =`
    SELECT u."NAME", u."IMG" FROM public."USERS" u
    WHERE u."ID" IN (
                      SELECT tu."USER_ID"
                      FROM public."TRIP_USER" tu
                      WHERE tu."IS_OWNER" = true AND
                            tu."TRIP_ID" IN (
                                              SELECT "PARTNER_TRIP_ID"
                                              FROM public."PARTNERS_SUGGESTIONS"
                                              WHERE "OWNER_TRIP_ID" = $1 AND
                                                    "WANTED" = true))
    `
    const values=[tripId];

    return executeQuery(query, values)
}

function getTripPartners(data){
    var query = `
        SELECT *
        FROM public."USERS" u, 
            public."TRIP_USER" tu
        WHERE tu."TRIP_ID" = $1
        AND tu."USER_ID" = u."ID"
    `

    const values=[1];

    return executeQuery(query, values);
}

module.exports = {addNewTrip, addNewPartner, getTripPartners};
