const calcSimilarInsterstsNum = function(intrests1, intrests2) {

    var similarIntrests = intrests1.map((intrest)=> {
        return intrests2.includes(intrest);
    });
}


module.exports = {
    calcSimilarInsterstsNum: calcSimilarInsterstsNum
}