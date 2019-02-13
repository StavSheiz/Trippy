
const calcTimeOverlapp = function(trip1Time, trip2Time) {

    //Trip1 starts berore trip2
    datesRangesDiffString = '';

    // Find First letter
    if(trip1Time.start > trip2Time.start){
        datesRangesDiffString +='b';
    } else if(trip1Time.start < trip2Time.start) {
        datesRangesDiffString +='s';
    } else {
        datesRangesDiffString +='e';
    }

    // Find Second letter
    if(trip1Time.end > trip2Time.end){
        datesRangesDiffString +='b';
    } else if(trip1Time.end < trip2Time.end) {
        datesRangesDiffString +='s';
    } else {
        datesRangesDiffString +='e';
    }

console.log(datesRangesDiffString);

    var dateDiffInDays = datesDifferenceCalcMatrix[datesRangesDiffString](trip1Time, trip2Time);

    return dateDiffInDays > 0 ? dateDiffInDays + 1 : dateDiffInDays < 0 ? 0 : 1;
}

const calcDateDiffInDays = function(date1, date2) {
    return Math.round((date2-date1)/(1000*60*60*24));
}

const datesDifferenceCalcMatrix = 
{
    'bb':function(range1, range2)
    {   
        return calcDateDiffInDays(range1.start, range2.end);
    },
    'bs':function(range1, range2)
    {   
        return calcDateDiffInDays(range1.start, range1.end);
    },
    'be':function(range1, range2)
    {   
        return calcDateDiffInDays(range1.start, range1.end);
    },
    'sb':function(range1, range2)
    {   
        return calcDateDiffInDays(range2.start, range2.end);
    },
    'ss':function(range1, range2)
    {   
        return calcDateDiffInDays(range2.start, range1.end);
    },
    'se':function(range1, range2)
    {   
        return calcDateDiffInDays(range2.start, range2.end);
    },
    'eb':function(range1, range2)
    {   
        return calcDateDiffInDays(range1.start, range2.end);
    },
    'es':function(range1, range2)
    {   
        return calcDateDiffInDays(range1.start, range1.end);
    },
    'ee':function(range1, range2)
    {   
        return calcDateDiffInDays(range1.start, range1.end);
    }
}


//run
var a1=new Date();
var a2=new Date();

var b1=new Date();
var b2=new Date();

a1.setDate(15);
a2.setDate(15);
b1.setDate(10);
b2.setDate(15);

console.log(calcTimeOverlapp({start:a1, end:a2}, {start:b1, end:b2}));

module.exports = {
    calcTimeOverlapp: calcTimeOverlapp
}