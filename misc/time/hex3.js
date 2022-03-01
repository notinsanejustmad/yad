function myFunction() {
  setInterval(function(){
    var d = new Date();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    var ms = d.getMilliseconds();
    var totalsec = HH * 60 * 60 * 1000;
    var temp = mm * 60 * 1000;
    var DD = d.getDate();
    var dayhex = "hex";
	/*var unix = d.getTime();
	var timenow = unix - (totalsec + temp - (DD*24*60*60*100) - (YY);*/
    
    var start = new Date(d.getFullYear(), 0, 0);
var diff = d - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
    
    var one = Math.round(day / 16);
    var two = Math.round(day / 16 / 16);
    var dayhex = one.toString(16).toUpperCase() + two.toString(16).toUpperCase();
	var temp2 = 255 - parseInt(dayhex, 10);
	

    totalsec = totalsec + temp + (ss*1000) + ms;
    var total = 86400000;
    var ini = total / totalsec;
    var newtemp = 65536 / ini;
    newtemp = Math.floor(newtemp);
	/*var realsec = totalsec + temp + ss*100 + ms;
	var ini = ((realsec/100)*255)/100;
	newtemp = Math.floor(ini);*/
    var end = newtemp.toString(16).toUpperCase();
    var hexcol = dayhex + end;
	var temp3 = end.slice(0, 2);
	temp3 = 255 - parseInt(temp3, 16);
	var temp4 = end.slice(2, 4);
	temp4 = 255 - parseInt(temp4, 16);
	var hexcol2 = temp2.toString(16) + temp3.toString(16) + temp4.toString(16);
    document.body.style.backgroundColor = hexcol;
	document.getElementById("txt").style.color = hexcol2;
    document.getElementById("txt").innerHTML = hexcol;
      }, 50);
}
