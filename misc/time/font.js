function myFunction() {
  setInterval(function(){
    var d = new Date();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    var ms = d.getMilliseconds();
    var totalsec = HH * 60 * 60;
    var temp = mm * 60;
    var DD = d.getDate();
    var dayhex = "hex";
	totalsec = totalsec + temp + ss;
	
	
	
	
	document.getElementById("txt1").style.fontSize = HH + "px";
	document.getElementById("txt2").style.fontSize = mm + "px";
	document.getElementById("txt3").style.fontSize = ss + "px";
	document.getElementById("txt1").innerHTML = HH;
	document.getElementById("txt2").innerHTML = mm;
	document.getElementById("txt3").innerHTML = ss;
      }, 50);
	
}
