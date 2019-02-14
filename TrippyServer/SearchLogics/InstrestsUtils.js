const calcSimilarInsterstsNum = function(intrests1, intrests2) {

    var similarIntrests = intrests1.filter((intrest)=> {
        return intrests2.includes(intrest);
    });
    
    return similarIntrests.length
}


module.exports = {
    calcSimilarInsterstsNum: calcSimilarInsterstsNum
}