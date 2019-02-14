
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
        var myTrip = trips.filter((t)=>{ t.Id == tripId})[0];
        var OtherTrips = trips.filter((t)=>{ t.Id != tripId});


        var recomndation = searchUtils.findBestPartner(myTrip, OtherTrips);

        response.send(recomndation);
    });

}

module.exports = {searchBestMatch};

searchBestMatch(3, {send:function(q){console.log(q)}});

// var startDate = new Date();
// var endDate = new Date();

// startDate.setDate(1);
// endDate.setDate(10);

// myTrip = {
//     Id:1,
//     Intrests:[1, 2, 3],
//     StartDate: startDate,
//     EndDate: endDate,
//     Location:    {
//         "address_components": [
//             {
//                 "long_name": "Haifa",
//                 "short_name": "Haifa",
//                 "types": [
//                     "locality",
//                     "political"
//                 ]
//             },
//             {
//                 "long_name": "Haifa",
//                 "short_name": "Haifa",
//                 "types": [
//                     "administrative_area_level_2",
//                     "political"
//                 ]
//             },
//             {
//                 "long_name": "Haifa District",
//                 "short_name": "Haifa District",
//                 "types": [
//                     "administrative_area_level_1",
//                     "political"
//                 ]
//             },
//             {
//                 "long_name": "Israel",
//                 "short_name": "IL",
//                 "types": [
//                     "country",
//                     "political"
//                 ]
//             }
//         ],
       
//         "name": "Haifa",
        
//         "place_id": "ChIJRegNdUy6HRURmlKBKpgjXcM",
        
//     }
// }

// var other = [
//     {
//         Id:2,
//         Intrests:[2, 3],
//         StartDate: startDate,
//         EndDate: endDate,
//         Location:    {
//             "address_components": [
//                 {
//                     "long_name": "Haifa",
//                     "short_name": "Haifa",
//                     "types": [
//                         "locality",
//                         "political"
//                     ]
//                 },
//                 {
//                     "long_name": "Haifa",
//                     "short_name": "Haifa",
//                     "types": [
//                         "administrative_area_level_2",
//                         "political"
//                     ]
//                 },
//                 {
//                     "long_name": "Haifa District",
//                     "short_name": "Haifa District",
//                     "types": [
//                         "administrative_area_level_1",
//                         "political"
//                     ]
//                 },
//                 {
//                     "long_name": "Israel",
//                     "short_name": "IL",
//                     "types": [
//                         "country",
//                         "political"
//                     ]
//                 }
//             ],
           
//             "name": "Haifa",
            
//             "place_id": "ChIJRegNdUy6HRURmlKBKpgjXcM",
            
//         }
//     },
//     {
//         Id:3,
//         Intrests:[1, 2, 3],
//         StartDate: startDate,
//         EndDate: endDate,
//         Location:   {
//             "address_components": [
//                 {
//                     "long_name": "Haifa",
//                     "short_name": "Haifa",
//                     "types": [
//                         "locality",
//                         "political"
//                     ]
//                 },
//                 {
//                     "long_name": "Haifa",
//                     "short_name": "Haifa",
//                     "types": [
//                         "administrative_area_level_2",
//                         "political"
//                     ]
//                 },
//                 {
//                     "long_name": "Haifa District",
//                     "short_name": "Haifa District",
//                     "types": [
//                         "administrative_area_level_1",
//                         "political"
//                     ]
//                 },
//                 {
//                     "long_name": "Israel",
//                     "short_name": "IL",
//                     "types": [
//                         "country",
//                         "political"
//                     ]
//                 }
//             ],
           
//             "name": "Haifa",
            
//             "place_id": "ChIJRegNdUy6HRURmlKBKpgjXcM",
            
//         }
//     },
//     {
//         Id:4,
//         Intrests:[],
//         StartDate: startDate,
//         EndDate: endDate,
//         Location:    {
//             "address_components": [
//                 {
//                     "long_name": "Peru",
//                     "short_name": "PE",
//                     "types": [
//                         "country",
//                         "political"
//                     ]
//                 }
//             ],
            
//             "name": "Peru",
//             "place_id": "ChIJ9RRZwFDIBZERSAYheRIBnvI",
            
//         }
//     },
//     {
//         Id:5,
//         Intrests:[],
//         StartDate: startDate,
//         EndDate: endDate,
//         Location:    {
//             "address_components": [
//                 {
//                     "long_name": "Israel",
//                     "short_name": "IL",
//                     "types": [
//                         "country",
//                         "political"
//                     ]
//                 }
//             ],
            
//             "name": "Israel",
            
//             "place_id": "ChIJi8mnMiRJABURuiw1EyBCa2o",
            
//         }
//     }
// ];

// console.log('+++++++++++++++++++++++++++++++++')
// console.log( searchUtils.findBestPartner(myTrip, other))