// Header tells Open or Closed
 function isOpen() {

  var date = new Date();
  var openClose = document.getElementById("openOrNot");
  var day = date.getDay();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  //set default to closed
  openClose.innerHTML = "Closed until 11:00am";

  if ( day == 0 ) {
    openClose.innerHTML = "Closed until Monday";
  }

  // Friday
  if (day == 5){
     // if hours are between 11 and 2 inclusive
    if ( 11 <= hour <= 14 ){
      openClose.innerHTML = "Open Now!"; // set first to open
      if ( hour == 11 ){
        if ( min >= 30 ){
          openClose.innerHTML = "Open Now!"; //Open after 11:30
        } else openClose.innerHTML = "Closed until 11:30am"; // Closed before 11:30
      } 
      else if ( hour == 14 ){
        if ( min < 30 ) {
          openClose.innerHTML = "Open Now!"; //open before 2:30
        } else openClose.innerHTML = "Closed until 5:00pm"; // closed after 2:30 til 5p
      }
    }
    // if hours are between 2 and 5 
    else if( 14 <= hour < 17 ){ 
      openClose.innerHTML = "Closed until 11:00am"; // set first to closed
      if ( hour == 14 ) { // if hour is 2 
        if ( min <= 30 ){ // if its before 2:30
          openClose.innerHTML = "Open Now!";
        } else openClose.innerHTML = "Closed until 5:00pm";
      }
    } 
    // if hours are between 5 and 9 
    else if ( (hour >= 17) && (hour <= 21) ){ 
        if ( hour != 21 ) openClose.innerHTML = "Open Now!";
        else if ( min < 30 ) openClose.innerHTML = "Open Now!";
        else openClose.innerHTML = "Closed until 11:00am";
      } 
   } // end friday 

  // DO SATURDAY!!!
  if ( day == 6 ){
    // set first to close
    openClose.innerHTML = "Closed unitl Monday";
    // if hours are between 5 and 9 
    if ( 17 <= hour < 21  ){
        openClose.innerHTML = "Open Now!";
        if ( hour == 21 ) {
          if ( min < 30 ) openClose.innerHTML = "Open Now!";
          else openClose.innerHTML = "Closed until Monday";
        }
    } 
  }
  //MON thru THURS
  if ( 1 <= day <= 4){
    // if hours are between 11 and 2
    if ( 11 <= hour <= 14 ){
      openClose.innerHTML = "Open Now!"; // set first to open
      if ( hour == 11 ){
        if ( min >= 30 ){
          openClose.innerHTML = "Open Now!"; //Open after 11:30
        } else openClose.innerHTML = "Closed until 11:30am"; // Closed before 11:30
      } 
      else if ( hour == 14 ){
        if ( min < 30 ) {
          openClose.innerHTML = "Open Now!"; //open before 2:30
        } else openClose.innerHTML = "Closed until 5:00pm"; // closed after 2:30 til 5p
      }
    } 
    // if hours are between 2 and 5 
    if( 14 <= hour < 17 ){
      openClose.innerHTML = "Closed until 5:00pm"; // set first to close
      if ( hour == 14 ){ // if hour is 2 
        if ( min <= 30 ){ // if its before 2:30
          openClose.innerHTML = "Open Now!";
        } else openClose.innerHTML = "Closed until 5:00pm";
      }
    }
    // if hours are between 5 and 9 
    if ( 17 <= hour < 21  ){
        openClose.innerHTML = "Open Now!";
    } 
  }
  //set color
  openClose.style.color = "FireBrick";
}

isOpen();