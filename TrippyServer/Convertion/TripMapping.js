const mapTripUsers = function(tripList) {

    var convertedList = [];

    for(var i in tripList){
        currTrip = tripList[i];

        var convertedTripUser = {
            TripId: currTrip["TRIP_ID"],
            UserId: currTrip["USER_ID"],
            IsOwner: currTrip["IS_OWNER"]
        };

        convertedList.push(convertedTripUser);
    }

    return convertedList;
}

const mapTrips = function(tripList) {
    
        var convertedList = [];
    
        for(var i in tripList){
            currTrip = tripList[i];
    
            var convertedTrip = {
                Id: currTrip["ID"],
                Location: currTrip["LOCATION"],
                StartDate: new Date(currTrip["START_DATE"].toString()),
                StartDate: new Date(currTrip["END_DATE"].toString()),
                Details: currTrip["DETAILS"],
                Intrests: currTrip["INTRESTS"],
                Img: currTrip["IMG"]
            };
    
            convertedList.push(convertedTrip);
        }

        return convertedList;
    }


    const mapTripsWithUser = function(tripList) {
        
            var convertedList = [];
        
            for(var i in tripList){
                currTrip = tripList[i];
        
                var convertedTrip = {
                    Id: currTrip["\"TRIPS\".ID"],
                    Location: currTrip["\"TRIPS\".LOCATION"],
                    StartDate: new Date(currTrip["\"TRIPS\".START_DATE"].toString()),
                    StartDate: new Date(currTrip["\"TRIPS\".END_DATE"].toString()),
                    Details: currTrip["\"TRIPS\".DETAILS"],
                    Intrests: currTrip["\"TRIPS\".INTRESTS"],
                    PlaceImg: currTrip["\"TRIPS\".IMG"],
                    UserId: currTrip['USER_ID'],
                    UserName: currTrip['"USERS".NAME'],
                    UserName: currTrip['"USERS".IMG']
                };
        
                convertedList.push(convertedTrip);
            }
    
            return convertedList;
        }
    
const mapPartnerSuggestions = function(){
        
    var convertedList = [];
    
        for(var i in tripList){
            currTrip = tripList[i];
    
            var convertedTrip = {
                OwnerTripId: currTrip["OWNER_TRIP_ID"],
                PartnerTripId: currTrip["PARTNER_TRIP_ID"],
                Wanted: currTrip["WANTED"]
            };
    
            convertedList.push(convertedTrip);
        }

        return convertedList;
}

module.exports = {
    mapTripUsers:mapTripUsers,
    mapTrips:mapTrips,
    mapPartnerSuggestions:mapPartnerSuggestions,
    mapTripsWithUser:mapTripsWithUser
};