var wakeupTime = 7; // 7AM
var lunchTime = 11; // 11AM
var partyTime = 19; // 7PM
var napTime = lunchTime + 2; // 1PM
var evening = 17; // 5PM
var time = new Date().getHours();

// set isPartyTime to false
var isPartyTime = false;

var partyTimeButton = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

/* Update Clock */
var updateClock = function() {

  // Get image element
  var kitty = document.getElementById("kitty");
  // Get clock element
  var timeEvent = document.getElementById("timeEvent");
  var messageText;
  // Define default image
  var image= "img/kittens-01.jpg";

  if (time == partyTime) {
	   image = "img/azura-03.jpg";
     messageText = "IZ PARTY TIME!!";
  } else if (time == napTime) {
	     image = "img/domino-02.jpg";
       messageText = "IZ NAP TIME...";
  } else if (time == lunchTime) {
	     image = "img/azura-domino-02.jpg";
       messageText = "IZ NOM NOM TIME!!";
  } else if (time == wakeupTime) {
	     image = "img/azura-01.jpg";
       messageText = "IZ TIME TO GETTUP.";
 } else if (time < wakeupTime) {
      image = "img/azura-02.jpg";
      messageText = "SHHH...IT'S PURR TIME";
  } else if (time < lunchTime) {
	     image = "img/kittens-02.jpg";
       messageText = "GOOD MEOWNING";
  } else if (time > evening) {
	     image = "img/azura-domino-03.jpg";
       messageText = "GOOD EVENING";
  } else {
	     image = "img/domino-01.jpg";
       messageText = "IZ STILL NAP TIME...";
  }

  timeEvent.innerText = messageText;
  kitty.src = image;

  showCurrentTime();
};

/* Show Current Time */
var showCurrentTime = function() {

  // Display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set Hours
  if (hours >= 12) {
      meridian = "PM";
  }
  if (hours > 12) {
      hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
      minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
      seconds = "0" + seconds;
  }

  // Put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval ( updateClock, oneSecond);

/* Party Time Button */
var partyEvent = function() {

   //check isPartyTime
   if (isPartyTime === false){
        // if isPartyTime is false, change it to true
        //so we know the button has been clicked
        isPartyTime = true;
        // set time to partyTime so the lolCat clock
        //image and message update to the partyTime image and message
        time = partyTime;
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false;
        // set time back to the current time
        time = new Date().getHours();
        partyTimeButton.style.backgroundColor = "#222";
    }
};

/* Time Selectors */
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};
 

partyTimeButton.addEventListener('click', partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
