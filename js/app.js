

//window.addEventListener('load', function() {});

/*botones */
let selectOption = function () {
  var selected = $(this).text();
  // console.log($(this).parent().parent().prev())
  $(this).parent().parent().parent().find('button').html(selected + '&nbsp;<span class="caret"></span>');
}

new WOW().init();

var sponsorsIcons = document.getElementById("sponsors-icons");
var sponsorsDiv = document.getElementById("sponsors-div");


$('.carousel').carousel()

window.onscroll = function () {
  //var scroll = window.scrollTop();
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  //console.log(scroll);
  if (scroll > 640) {
    //console.log('supera a 630');
  } else {
    //console.log('no supera');
  }
};


//Fechas inicial y final
/*
var d = new Date();
console.log(d.getMonth() +1);

document.getElementById("fecha").append(`${ - (d.getMonth() +1)}`)
*/

var end = new Date('11/23/2018 9:30 AM');

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

//document.getElementById('countdown-mobile').innerHTML = 'Faltan ' + days + ' dias, ';
//document.getElementById('countdown-mobile').innerHTML += hours + ' horas ';
document.getElementById('countdown-desktop').innerHTML = 'Faltan ' + days + ' dias, ';
document.getElementById('countdown-desktop').innerHTML += hours + ' horas ';
//document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
//document.getElementById('countdown').innerHTML += seconds + ' segundos';
//}

//timer = setInterval(showRemaining);

/*´´EMPRESAS LIST ARRAY */
const wine = ['Vino1', 'Vino2', 'Vino3', 'Vino4', 'Vino5', 'Vino6'];
const food = ['Comida1', 'Comida2', 'Comida3', 'Comida4', 'Comida5', 'Comida6'];
const desserts = ['postres1', 'postres2', 'postres3', 'postres4', 'postres5', 'postres6'];
const beverage = ['bebidas1', 'bebidas2', 'bebidas3', 'bebidas4', 'bebidas5', 'bebidas6'];

var newWine = [];
var random = Math.floor(Math.random()*3);
/*
$('#desserts-list').append(`<ul>
    ${wine[random]}
    </ul>`
);*/
newWine.push(random);

var random = Math.floor(Math.random()*3);
/*$('#desserts-list').append(`<ul>
    ${wine[random]}
    </ul>`
);*/
newWine.push(random);

var random = Math.floor(Math.random()*3);
/*$('#desserts-list').append(`<ul>
    ${wine[random]}
    </ul>`
);*/
newWine.push(random);

console.log(newWine);

  $('.list-toggle').hide();
$('.list-button').on('click', function(){
  console.log($(this));

});