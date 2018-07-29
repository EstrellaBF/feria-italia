//window.addEventListener('load', function() {});
var sponsorsImg = [
  {src: "assets/logos/apavit.png"},
  {src: "assets/logos/cdo.png"},
  {src: "assets/logos/circolo.png"},
  {src: "assets/logos/comites.png"},
  {src: "assets/logos/Logo CCL.png"},
  {src: "assets/logos/lucani.png"},
  {src: "assets/logos/opere.png"},
  {src: "assets/logos/piazza-italia.png"},
  {src: "assets/logos/ucss.png"}
];


var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var sponsorsIcons = document.getElementById("sponsors-icons");
var sponsorsDiv = document.getElementById("sponsors-div");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 14000); // Change image every 2 seconds
}

//section sponsors
//var img = document.createElement("IMG");
//sponsorsDiv.appendChild(img)

for(var i = 0; i < sponsorsImg.length; i++) {
  var img = document.createElement("IMG");
  sponsorsIcons.appendChild(img);
  img.setAttribute("src", sponsorsImg[i].src);
  //console.log("posicion " + i + ":" + img[i]);
}