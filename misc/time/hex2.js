function myFunction() {
  setInterval(function(){
    var d = new Date();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    var totalsec = HH * 60 * 60;
    var temp = mm * 60;
    var DD = d.getDate();
    var dayhex = "hex";
    
    var start = new Date(d.getFullYear(), 0, 0);
var diff = d - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
    
    var one = Math.round(day / 16);
    var two = Math.round(day / 16 / 16);
    var dayhex = one.toString(16).toUpperCase() + two.toString(16).toUpperCase();

    totalsec = totalsec + temp + ss;
    var total = 86400;
    var ini = total / totalsec;
    var newtemp = 65536 / ini;
    newtemp = Math.round(newtemp);
    var end = newtemp.toString(16).toUpperCase();
    var hexcol = dayhex + end;
    document.body.style.backgroundColor = hexcol;
    document.getElementById("txt").innerHTML = hexcol;
      }, 50);
}
