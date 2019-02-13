
const { Pool, Client } = require('pg')

const client = new Client({
    user: 'twfnggzo',
    host: 'manny.db.elephantsql.com',
    database: 'twfnggzo',
    password: 'K3Io6cuZK0D-Cr18ta89JRJ3uhdvFE4u',
    port: 5432,
  })

function connectToDb(){
    return client.connect();
}


function executeQuery(query) {
   connectToDb().then(() => {
    client.query('SELECT * from public."INTRESTS"', (err, res) => {
        console.log(err, res)
        client.end()
      })
   }, (err) => {});


}


var exports = module.exports = {executeQuery};

