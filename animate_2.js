var i = 0;
var greeting = 'Dear Niamh & Ryan,';
var title = 'Merry Christmas';
var subtitle = 'and a happy new year!';
var signoff = 'Lots of love,';
var sender = 'Rachel \& Tony';
var speed = 50;

var length = Math.max( greeting.length, title.length, subtitle.length, signoff.length, sender.length );

function happyHolidays() {
  if (i < length ){
    document.getElementById("greeting").innerHTML += greeting.charAt(i);
    document.getElementById("title").innerHTML += title.charAt(i);
    document.getElementById("subtitle").innerHTML += subtitle.charAt(i);
    document.getElementById("signoff").innerHTML += signoff.charAt(i);
    document.getElementById("sender").innerHTML += sender.charAt(i);
    i++;
    
    setTimeout(happyHolidays, speed);
  }
}
