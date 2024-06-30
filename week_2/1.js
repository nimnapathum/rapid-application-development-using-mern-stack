function Greet(time) {
    if (time < 10) {
        return "Good morning";
    } else if (time < 20) {
        return "Good day";
    } else {
        return "Good evening";
    }
}

let time1 = 8;
console.log("When the time is " + time1 + ": " + Greet(time1));

let time2 = 15;
console.log("When the time is " + time2 + ": " + Greet(time2));

let time3 = 23;
console.log("When the time is " + time3 + ": " + Greet(time3));