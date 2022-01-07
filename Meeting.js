const dayStart = "07:30";
const dayEnd = "17:45";
// This workday is long.. ugh

//funtion scheduleMeeting(startTime,DurationMinutes) {
    // ..TODO..
//}
let startTime = "17:00";
let durationMinutes = 01;

var dayStartHour;
var dayStartMinute;
var dayEndHour;
var dayEndMinute;
var meetingEndHour;
var meetingEndMinute;


if (dayStart.indexOf(":") === -1) {
    console.log("Your day start time does not contain a ':' Please use the 'HH:MM' format.");
    return 0;
} else {
    splitStart = dayStart.split(':');
    dayStartHour = Number(splitStart[splitStart.length -2])
    dayStartMinute = Number(splitStart[splitStart.length -1])
    console.log("The workday begins: "+dayStartHour+":"+dayStartMinute)
}
// Verify that the dayStart input contains a semicolon.
// Split the dayStart into two variables, HH and MM

if (dayEnd.indexOf(":") === -1) {
    console.log("Your day end time does not contain a ':' Please use the 'HH:MM' format.");
    return 0;
} else {
    splitEnd = dayEnd.split(':');
    dayEndHour = Number(splitEnd[splitEnd.length -2])
    dayEndMinute = Number(splitEnd[splitEnd.length -1])
    console.log("The workday ends: "+dayEndHour+":"+dayEndMinute)
}
// Verify that the dayEnd input contains a semicolon.
// Split the dayEnd into two variables, HH and MM

if (startTime.indexOf(":") === -1) {
    console.log("Your meeting start time does not contain a ':' Please use the 'HH:MM' format.");
    return 0;
} else {
    splitStartTime = startTime.split(':');
    startHour = Number(splitStartTime[splitStartTime.length -2])
    startMinute = Number(splitStartTime[splitStartTime.length -1])
}
// Verify that the startTime input contains a semicolon.
// Split the startTime into two variables, HH and MM


if(isNaN(startHour) || (isNaN(startMinute))){
    console.log("false");
    console.log("Your meeting start time is not a valid time. Please use the 'HH:MM' format.");
    return 0;
} else if((startHour < 0) || (startHour > 24)) {
    console.log("false");
    console.log("Your meeting start time is not a valid time. Please use the 'HH:MM' format. Check your HH field.");
    return 0;
} else if((startMinute < 0) || (startMinute > 60)) {
    console.log("Your meeting start time is not a valid time. Please use the 'HH:MM' format. Check your MM field.");
    console.log("false");
    return 0;
} else { 
  console.log("Meeting start: "+startHour+":"+startMinute)
}
// Verify that the startTime HH field is a non-missing numeric value >= 0 and <= 24
// Verify that the startTime MM field is a non-missing numeric value >= 0 and < 60

if (isNaN(durationMinutes) || (!durationMinutes) || (durationMinutes < 0)) {
    console.log("Please enter a meeting duration specified in the number of minutes.");
    return 0;
} else {
    durationMinutes = Number(durationMinutes)
    console.log("Duration of the meeting: "+durationMinutes+" min");
}
// Verify that the meeting duration is a specified as a number greater than 0.


if (startMinute + durationMinutes >= 60) {
    var meetingEndHour = Math.floor((startMinute + durationMinutes) / 60) + startHour;
    var meetingEndMinute = ((startMinute + durationMinutes) % 60);
} else {
    var meetingEndHour = startHour;
    var meetingEndMinute = (startMinute + durationMinutes);
}
console.log("Meeting end: "+meetingEndHour+":"+meetingEndMinute);
// Now that we have the meeting start time & duration, we can calculate the meeting end time

// Note: Conditions where we should return false are below.
// Each one has a comment beginning with 'false'

if ((startHour < dayStartHour) || (startHour > dayEndHour)) {
    console.log("false1");
    return 0;
}

if ((startHour == dayStartHour && startMinute < dayStartMinute) || (startHour == dayEndHour && startMinute > dayEndMinute)) {
    console.log("false2");
    return 0;
}
// 'false' If the meeting time begins before 7:30am (aka 7:30) or begins after 5:45
/* 
The above two IF statements can obviously be combined. I broke them up to make it easier to understand
and to allow for different return codes based on the reason it failed.
*/

if (meetingEndHour > dayEndHour || meetingEndHour == dayEndHour && meetingEndMinute > dayEndMinute) {
    console.log("false3")
    return 0;
}
// 'false' If the meeting time ends after 5:45pm (aka 17:45)
