let myIndex = 0;
carousel();



//header slideshow
function carousel() {
  let i;
  let x = document.getElementsByClassName("carousel-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

window.onscroll = function() {stickyHeader()};
//function for sticky navbar
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;


function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
