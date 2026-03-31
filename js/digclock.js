//Create a time data function
function currentTime() {
    var d = new Date();  //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM
    // 1. Logic for Time Zone Detection
    var utchr = d.getUTCHours();
    var timeDiff = utchr - d.getHours();
    var adjTimeDiff = (timeDiff + 24) % 24;
    var timeZone = "";
    // Check offsets (Winter/Summer)
    if (adjTimeDiff == 4) {
        timeZone = "ET";
    } else if (adjTimeDiff == 5) {
        timeZone = "CT";
    } else if (adjTimeDiff == 6) {
        timeZone = "MT";
    } else if (adjTimeDiff == 7) {
        timeZone = "PT";
    }
    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }
    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if ( hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }
    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; //adding time
}
//Run time data function every 1 second
setInterval(currentTime, 1000); //setting timer
            

//Initial run of time data function
currentTime();