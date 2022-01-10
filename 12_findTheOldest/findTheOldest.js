const findTheOldest = function (arr) {

    const today = new Date();

  const oldest = arr.sort(function (a, b) {
    let lastperson;
    let nextperson;
    if (a.yearOfDeath) {
      lastperson = a.yearOfDeath - a.yearOfBirth;
    } else {
        lastperson = today.getFullYear() - a.yearOfBirth;
    }

    if (b.yearOfDeath) {
      nextperson = b.yearOfDeath - b.yearOfBirth;
    } else{
        nextperson = today.getFullYear() - b.yearOfBirth;
    }

    return lastperson > nextperson ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
