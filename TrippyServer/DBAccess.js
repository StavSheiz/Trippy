
const { Pool, Client } = require('pg')

const client = new Client({
    user: 'twfnggzo',
    host: 'manny.db.elephantsql.com',
    database: 'twfnggzo',
    password: 'K3Io6cuZK0D-Cr18ta89JRJ3uhdvFE4u',
    port: 5432,
})

function connectToDb() {
    return client.connect();
}


function executeQuery(query, params) {

    var promise = new Promise(
    function (resolve, reject) {connectToDb().then(() => {
        client.query(query, params, (err, res) => {
            console.log(err, res)
            client.end()

            resolve(res["rows"]);
        })
    }, (err) => {
        client.end()
        console.log(err)
        reject(err);
    })});

    return promise;
}


var exports = module.exports = { executeQuery };

