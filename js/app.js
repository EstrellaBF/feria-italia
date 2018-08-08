

//window.addEventListener('load', function() {});

// create the module and name it demoApp
var italiaApp = angular.module('italiaApp', ['ngRoute']);
/*
// create the controller and inject Angular's $scope
italiaApp.controller('mainCtrl', function ($scope) {
  $scope.message = 'Hello world!';
});

italiaApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

    .when('/restaurant' , {
      templateUrl : 'restaurant.html',
      controller  : 'mainCtrl2'
    });
});

    // create the controller and inject Angular's $scope
    italiaApp.controller('mainCtrl2', function($scope) {
      // create a message to display in our view
      $scope.message = 'Hello world, this is the home page!';
  });

*/

/*botones */
let selectOption = function () {
  var selected = $(this).text();
  // console.log($(this).parent().parent().prev())
  $(this).parent().parent().parent().find('button').html(selected + '&nbsp;<span class="caret"></span>');
}

// Selected option on modal
$('.dropdown-item').on('click', selectOption);


  var sponsorsImg = [
    { src: "assets/logos/apavit.png" },
    { src: "assets/logos/cdo.png" },
    { src: "assets/logos/circolo.png" },
    { src: "assets/logos/comites.png" },
    { src: "assets/logos/ccl.png" },
    { src: "assets/logos/lucani.png" },
    { src: "assets/logos/opere.png" },
    { src: "assets/logos/piazza-italia.png" },
    { src: "assets/logos/ucss.png" }
  ];

  var sponsorsIcons = document.getElementById("sponsors-icons");
  var sponsorsDiv = document.getElementById("sponsors-div");
  /*
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  
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
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
  */

  //section sponsors
  //var img = document.createElement("IMG");
  //sponsorsDiv.appendChild(img)

  for (var i = 0; i < sponsorsImg.length; i++) {

    var img = document.createElement("IMG");
    sponsorsIcons.appendChild(img);
    img.setAttribute("src", sponsorsImg[i].src);
    //console.log("posicion " + i + ":" + img[i]);
  }

  $('.carousel').carousel()