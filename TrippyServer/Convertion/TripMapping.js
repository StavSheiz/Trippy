const mapTripUsersFromDBToObject = function(tripList) {

    var convertedList = [];

    for(var i in tripList){
        currTrip = tripList[i];

        var convertedTrip = {
            TripId: currTrip["TRIP_ID"],
            UserId: currTrip["USER_ID"],
            IsOwner: currTrip["IS_OWNER"]
        };

        convertedList.push(convertedList);
    }

    return convertedList;
}

const mapTripsFromDBToObject = function(tripList) {
    
        var convertedList = [];
    
        for(var i in tripList){
            currTrip = tripList[i];
    
            var convertedTrip = {
                Id: currTrip["ID"],
                Location: currTrip["LOCATION"],
                StartDate: new Date(currTrip["START_DATE"].toString()),
                StartDate: new Date(currTrip["END_DATE"].toString()),
                Details: currTrip["DETAILS"],
                Intersts: currTrip["INTRESTS"],
                Img: currTrip["IMG"],
            };
    
            convertedList.push(convertedList);
        }

        return convertedList;
    }

module.exports = {
    mapTripUserssFromDBToObject:mapTripUserssFromDBToObject
};