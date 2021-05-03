var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var s = document.getElementsByClassName("mySlides");
  for (i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > s.length) {slideIndex = 1}
  s[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}