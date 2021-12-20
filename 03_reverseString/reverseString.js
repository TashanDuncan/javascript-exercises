const reverseString = function(str) {
    const splitString = str.split("")
    
    return splitString.reverse().join().toString().replace(/,/g,'') ;

    
};

// Do not edit below this line
module.exports = reverseString;
