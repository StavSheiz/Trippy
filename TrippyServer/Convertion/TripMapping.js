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

}

const mapTripsFromDBToObject = function(tripList) {
    
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
    
    }

module.exports = {
    mapTripUserssFromDBToObject:mapTripUserssFromDBToObject
};