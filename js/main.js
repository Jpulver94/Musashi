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
    // if hours are between 11 and 2
    if ( hour >= 11 && hour <= 14 ){
      openClose.innerHTML = "Open until 2:30pm!"; // set first to open
      if ( hour == 11 ){
        if ( min >= 30 ){
          openClose.innerHTML = "Open until 2:30pm!"; //Open after 11:30
        } else openClose.innerHTML = "Closed until 11:30am"; // Closed before 11:30
      }
      else if ( hour == 14 ){
        if ( min < 30 ) {
          openClose.innerHTML = "Open until 2:30pm!"; //open before 2:30
        } else openClose.innerHTML = "Closed until 5:00pm"; // closed after 2:30 til 5p
      }
    }
    // if hours are between 3 and 5 (caught case of 2:30 in last if)
    else if ( hour > 14 && hour < 17 ){
      openClose.innerHTML = "Closed until 5:00pm"; // set first to closed
    }
    // if hours are between 5 and 9
    else if ( (hour >= 17) && (hour <= 21) ){
        if ( hour != 21 ) openClose.innerHTML = "Open until 9:30pm!";
        else if ( min < 30 ) openClose.innerHTML = "Open until 9:30pm!";
        else openClose.innerHTML = "Closed until 11:00am";
      }
   } // end friday

  // Saturday
  if ( day == 6 ){
    // set first to close
    openClose.innerHTML = "Closed unitl Monday";
    // if hours are between 5 and 9
    if ( hour >= 17 && hour < 21  ){
        openClose.innerHTML = "Open until 9:30pm!";
        if ( hour == 21 ) {
          if ( min < 30 ) openClose.innerHTML = "Open  until 9:30pm!";
          else openClose.innerHTML = "Closed until Monday";
        }
    }
  }

  //MON thru THURS
  if ( day >= 1 && day <= 4){
    // if hours are between 11 and 2
    if ( hour >= 11 && hour <= 14 ){
      openClose.innerHTML = "Open until 2:30pm!"; // set first to open
      if ( hour == 11 ){
        if ( min >= 30 ){
          openClose.innerHTML = "Open until 2:30pm!"; //Open after 11:30
        } else openClose.innerHTML = "Closed until 11:30am"; // Closed before 11:30
      }
      else if ( hour == 14 ){
        if ( min < 30 ) {
          openClose.innerHTML = "Open until 2:30pm!"; //open before 2:30
        } else openClose.innerHTML = "Closed until 5:00pm"; // closed after 2:30 til 5p
      }
    }
    // if hours are between 3 and 5
    else if( hour > 14 && hour < 17 ){
      openClose.innerHTML = "Closed until 5:00pm";
    }
    // if hours are between 5 and 9
    else if ( hour >= 17 && hour < 21  ){
        openClose.innerHTML = "Open until 9:30pm!";
    }
  }
  //set color
  openClose.style.color = "FireBrick";
}

isOpen();

function menu(btnClicked) {
   var btn = document.getElementById(btnClicked);

   if( btn.classList.contains("unhidden") ) return;

    var hide = document.querySelector(".unhidden");
    hide.classList.replace("unhidden", "hidden");
    btn.classList.replace("hidden", "unhidden");

}

var acc = document.getElementsByClassName("accordion");
var i;

function mobileMenu(btn){

  for (i = 0; i < acc.length; i++) {
    acc[i].classList.remove("active");
    acc[i].nextElementSibling.style.maxHeight = null;
  }

  btn.classList.add("active");
  var panel = btn.nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
}