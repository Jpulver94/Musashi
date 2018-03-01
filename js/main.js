// GONNA DO A CLOCK HERE //
//days 0-6 0 is sunday
//hours 0-23
//minutes 0 - 59
//seconds 0 - 59

/* MUSASHI HOURS
Mon 11:30 am - 2:30 pm
5:00 pm - 9:00 pm 
Tue 11:30 am - 2:30 pm
5:00 pm - 9:00 pm 
Wed 11:30 am - 2:30 pm
5:00 pm - 9:00 pm
Thu 11:30 am - 2:30 pm
5:00 pm - 9:00 pm 
Fri 11:30 am - 2:30 pm
5:00 pm - 9:30 pm 
Sat 5:00 pm - 9:30 pm 
Sun Closed*/
// if (getday == 0) closed 
// else{
// if (hour >= 11 && minutes >= 30) && (hour <= 14 && minutes <=30) then is open
// if (hour >= 17) && (hour <= 21) then is open
// }
// Clock feature here
 function isOpen() {
  var date = new Date();
  var openClose = document.getElementById("openOrNot");
  var day = date.getDay();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  if ( day == 0 ) {
    openClose.innerHTML = "Closed until Monday";
  } else if ( 11 <= hour <= 14 ) ){ // if hours are between 11 and 2 inclusive
      if ( hour == 11 ){
        if ( min >= 30 ){
          openClose.innerHTML = "Open Now!"; //Open after 11:30
        } else openClose.innerHTML = "Closed until 11:30am"; // Closed before 11:30
      } 
      else if ( hour == 14 ){
        if ( min < 30 ) {
          openClose.innerHTML = "Open Now!"; //open before 2:30
        } else openClose.innerHTML = "Closed until 5:00pm"; // closed after 2:30 til 5p
      } else openClose.innerHTML = "Open Now!"; // Must be between 11:30 and 2:30

  } else if( 14 <= hour < 17 ){ // if hours are between 2 and 5 
    if ( hour == 14 ) { // if hour is 2 
      if ( min <= 30 ){
        openClose.innerHTML = "Open Now!";
      } else openClose.innerHTML = "Closed until 5:00pm";
    } else openClose.innerHTML = "Closed until 5:00pm";
  } else if ( (hour >= 17) && (hour <= 21) ){
      openClose.innerHTML = "Open Now!";
  } else { 
      openClose.innerHTML = "Closed until 11:00am"; }
}
isOpen();