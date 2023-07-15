"use strict";
/*

    The Wings Group
    Author: Hao Ren Yuan
    Date: June 6, 2023

    Filename: functions.js
*/
/*
window.addEventListener('scroll', function() {
  var image = document.getElementById('logo');
  var scrollPos = window.scrollY;
  var headHeight = document.querySelector('.shapeshift').offsetHeight;

  // Calculate the scale based on the scroll position and header height
  var scale = 1 - (scrollPos - headHeight) / 10; // You can adjust the divisor to control the speed of size change

  // Limit the minimum scale to 0.8 (or any other value you desire)
  scale = Math.max(scale, 0.5);

  // Apply the scale to the image
  image.style.transform = 'scale(' + scale + ')';
}); */

window.addEventListener('scroll', function(event) {
  var image = document.getElementById('logo');
  var scrollPos = window.scrollY;

  // Handle navbar scroll behavior
  var navbar = document.getElementById('navbar');
  var navbarCenter = document.getElementById('navbar-center');

  if (scrollPos > 80) {
    // When user scrolls down:
    navbar.style.padding = "0px 10px";
    navbarCenter.style.display = "none";
    var scale = 0.4;
    image.style.transform = 'scale(' + scale + ')';
    image.style.position = "relative";
    image.style.top = "20px";

    // Add if statement for navbar hover
    navbar.addEventListener('mouseover', function(event) {
      var rect = navbar.getBoundingClientRect();
      var y = event.clientY - rect.top;
      if (y.toFixed() == '0') {
        navbar.style.padding = "103px 10px";
      }
    });

    navbar.addEventListener('mouseover', function(event) {
      navbar.style.padding = "103px 10px";
      navbarCenter.style.display = "block";
      var scale = 1;
      image.style.transform = 'scale(' + scale + ')';
      image.style.position = "relative";
      image.style.top = "0px";
      //if (scrollPos <= 80) {
      //  navbar.style.padding = "103px 10px";
      //  navbarCenter.style.display = "block";
      //  var scale = 1;
      //  image.style.transform = 'scale(' + scale + ')';
      //  image.style.position = "relative";
      //  image.style.top = "0px";
      //} else {
      //  navbar.style.padding = "0px 10px";
      //}
    });

    var rect = navbar.getBoundingClientRect();
    var y = event.clientY - rect.top;
    if (y.toFixed() !== '0') {
      
    
    navbar.addEventListener('mouseout', function(event) {
      navbar.style.padding = "0px 10px";
      navbarCenter.style.display = "none";
      var scale = 0.4;
      image.style.transform = 'scale(' + scale + ')';
      image.style.position = "relative";
      image.style.top = "20px";
    })
    };

  } else {
    // When user scrolls up:
    navbar.style.padding = "103px 10px";
    navbarCenter.style.display = "block";
    var scale = 1;
    image.style.transform = 'scale(' + scale + ')';
    image.style.position = "relative";
    image.style.top = "0px";

    // Remove the navbar hover behavior when scrolling up
    navbar.removeEventListener('mouseover', function() {});
    navbar.removeEventListener('mouseout', function() {});
  }
});


/*window.addEventListener('scroll', function() {
  //var headHeight = document.querySelector('.shapeshift').offsetHeight;
  var image = document.getElementById('logo');
  var scrollPos = window.scrollY;
  
  // Calculate the scale based on the scroll position and header height
  //var scale = 1 - (scrollPos - headHeight) / scrollPos;

  // Apply the scale to the image
  //image.style.transform = 'scale(' + scale + ')';

  // Handle navbar scroll behavior
  var navbar = document.getElementById('navbar');
  var navbarCenter = document.getElementById('navbar-center');

  if (scrollPos > 80) {
    //When user scrolls down:
    navbar.style.padding = "0px 10px";
    navbarCenter.style.display = "none";
    var scale = 0.4;
    image.style.transform = 'scale(' + scale + ')';
    image.style.position = "relative";
    image.style.top = "20px";

  } else {
    //When user scrolls up:
    navbar.style.padding = "103px 10px";
    navbarCenter.style.display = "block";
    var scale = 1;
    image.style.transform = 'scale(' + scale + ')';
    image.style.position = "relative";
    image.style.top = "0px";
  }
});*/


/*
var logoImage = document.getElementById("logo");

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //logoImage.src = "Assets/MainLogo.png";
    logoImage.style.width = "50px"; // Adjust the reduced size as needed
    logoImage.style.height = "50px";
    document.getElementById("navbar").style.padding = "0px 10px";
    //document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("navbar-center").style.display = "none";
  } else {
    //When user scrolls up:
    //logoImage.src = "Assets/MainLogo.png";
    logoImage.style.width = "100px"; // Adjust the reduced size as needed
    logoImage.style.width = "100px";
    document.getElementById("navbar").style.padding = "80px 10px";
    //document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar-center").style.display = "block";
  }
}*/

/*
var navbar = document.getElementById("navbar");
var logoImage = document.getElementById("logo");
var prevScrollY = window.scrollY;


window.addEventListener("scroll", function() {
  var currentScrollY = window.scrollY;

  if (currentScrollY > prevScrollY) {
    navbar.classList.add("small");
    logoImage.classList.add("small");
  } else {
    navbar.classList.remove("small");
    logoImage.classList.remove("small");
  }

  prevScrollY = currentScrollY;
});
*/
