const googleMapsKey = 'AIzaSyDGoi4o6amvMNgsDecLshtZSssoKa_U-2w';

const timeUnit = require("./TimeCalculationUnit");


const CalCTripSimilarity = function(trip1, trip2) {

    var grade = 0;

    const trip1Time = {
            start: trip1.startDate,
            end: trip1.endDate
    };

    const trip2Time = {
        start: trip2.startDate,
        end: trip2.endDate
    }  

    var TimeOverlappiInDays = CalCTripSimilarity.calcTimeOverlapp(trip1Time, trip2Time);

    if(TimeOverlappiInDays == 0) {
        return 0;
    }


};
