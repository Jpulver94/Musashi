// Header tells Open or Closed
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
      if ( min <= 30 ){ // if its before 2:30
        openClose.innerHTML = "Open Now!";
      } else openClose.innerHTML = "Closed until 5:00pm";
    } else openClose.innerHTML = "Closed until 5:00pm";
  } else if ( (hour >= 17) && (hour <= 21) ){
      openClose.innerHTML = "Open Now!";
  } else { 
      openClose.innerHTML = "Closed until 11:00am"; }
}
isOpen();