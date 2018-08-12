

//window.addEventListener('load', function() {});

/*botones */
let selectOption = function () {
  var selected = $(this).text();
  // console.log($(this).parent().parent().prev())
  $(this).parent().parent().parent().find('button').html(selected + '&nbsp;<span class="caret"></span>');
}


var sponsorsIcons = document.getElementById("sponsors-icons");
var sponsorsDiv = document.getElementById("sponsors-div");


$('.carousel').carousel()

window.onscroll = function () {
  //var scroll = window.scrollTop();
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(scroll);
  if (scroll > 640) {
    console.log('supera a 630');
    //$menuHome.css('visibility', 'visible');
    // $menuHome.addClass('menu-home');
  } else {
    console.log('no supera');
    // $menuHome.hide();
  }
};


 //Fechas inicial y final
 /*
 var d = new Date();
console.log(d.getMonth() +1);

 document.getElementById("fecha").append(`${ - (d.getMonth() +1)}`)
 */

var end = new Date('08/13/2018 9:30 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

//function showRemaining() {
    var now = new Date();
    var distance = end - now;
    /*
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    */
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    console.log(days)
    //document.getElementById('countdown-mobile').innerHTML = 'Faltan ' + days + ' dias, ';
    //document.getElementById('countdown-mobile').innerHTML += hours + ' horas, ';
    document.getElementById('countdown-desktop').innerHTML = 'Faltan ' + days + ' dias, ';
    document.getElementById('countdown-desktop').innerHTML += hours + ' horas, ';
    //document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
    //document.getElementById('countdown').innerHTML += seconds + ' segundos';
//}

//timer = setInterval(showRemaining);