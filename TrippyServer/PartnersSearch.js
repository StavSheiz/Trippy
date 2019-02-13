const googleMapsKey = 'AIzaSyDGoi4o6amvMNgsDecLshtZSssoKa_U-2w';

const timeUtil = require("./TimeCalculationUnit");
const locationUtil = require("./LocationCalculationUnit");
const intrestsUtil = require("./InstrestsUtils");


const timeValue = 1;
const locationValue = 100;


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

    var timeOverlappInDays = timeUtil.calcTimeOverlapp(trip1Time, trip2Time);

    if(timeOverlappInDays == 0) {
        return 0;
    } else{
        grade +=timeOverlappInDays*timeValue;
    }

    var closnessDegree = locationUtil.calcLocationDegreeOfCloseness(trip1.Location, trip2.Location);

    if(closnessDegree == 0){
        return 0;
    } else {
        grade += closnessDegree*locationValue;
    }

    var numberOfIdenticalIntrests = intrestsUtil.calcSimilarInsterstsNum(trip1.Intrests, trip2.Intrsest);

};
