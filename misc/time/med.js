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
	var unix = d.getTime();
	var GMT = Math.trunc((unix - 1646164120)/60/60/1000);
	
	
	
	
    document.getElementById("txt").innerHTML = GMT;
      }, 50);
}
