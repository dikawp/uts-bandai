
// STICKY
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function() {myFunction()};


function responNav() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.classList.add('responsive')
  } else if (x.className === "topnav sticky"){
    x.classList.add('responsive')
  } else {
    x.classList.remove('responsive')
  }
}

// SCROLL TO TOP
var scrolling = document.getElementById("scrolling");

window.addEventListener("scroll", () =>{
  if (window.pageYOffset > 500 ){
    scrolling.classList.add("show")
  } else{
    scrolling.classList.remove("show")
  }
})

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
