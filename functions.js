"use strict";
/*

    The Wings Group
    Author: Hao Ren Yuan
    Date: June 6, 2023

    Filename: functions.js
*/

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("navbar-center").style.display = "none";
  } else {
    //When user scrolls up:
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar-center").style.display = "block";
  }
}
