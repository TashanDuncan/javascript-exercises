const removeFromArray = function(arr, rem1,rem2,rem3,rem4) {
    let result = [];

    arr.forEach(element => {
        switch(element) {
            case rem1:
                break;
            case rem2:
                break;
            case rem3:
                break;
            case rem4:
                break;
            default:
                result.push(element)
        }
    });
    return result

};

// Do not edit below this line
module.exports = removeFromArray;
