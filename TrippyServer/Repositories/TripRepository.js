const {
    executeQuery
} = require('../DBAccess')

function addNewTrip(data) {
    var query = `
        INSERT INTO public."TRIPS"
        VALUES(nextval('trips_seq'),$1,$2,$3,$4,$5,$6) RETURNING ID
    `
    const values = [data.location, data.end_date, data.start_date, data.details, data.tags.map((tag) => {
        return tag.id
    }), data.img];

    return executeQuery(query, values);
}

function addNewPartner(data) {
    var query = `
        INSERT INTO public."TRIP_USER"
        VALUES($1,$2,false)
    `
    const values = [data["trip"], data["user"]];
    return executeQuery(query, values);
}

module.exports = {
    addNewTrip,
    addNewPartner
};