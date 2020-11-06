function hoursAndMinutesTimeConverter(num) {
    var hour = Math.floor(num / 60); // calculates the time in hours and leaves out decimals
    var minutes = num % 60; // takes the remaining decimals and converts to minutes
    if (hour === 1 && minutes > 1) {
        return "the time is " + hour + " hour " + minutes + " minutes";
    } else if (hour > 1 && minutes === 1) {
        return "the time is " + hour + " hours " + minutes + " minute";
    } else if (hour === 1 && minutes === 1) {
        return "the time is " + hour + " hour " + minutes + " minute";
    } else {
        return "the time is " + hour + " hours " + minutes + " minutes";
    }

}

//line 4 to 11 takes care of the plurals and singular definitions of time, e.g 1 minute vs 2 minutes

console.log(timeConverter(71)); // expected time: 1 hour 11 minutes
console.log(timeConverter(133)); //  expected time: 2 hours 13 minutes
console.log(timeConverter(61)); // expected time: 1 hour 1 minute
console.log(timeConverter(121)); //expected time:  2 hours 1 minute