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
	var unix = d.getTime();
	var GMT = Math.trunc((unix - 1638355307519)/60/60/24/1000);
	
	if (GMT % 3 == 0){
		var RGB = "Redday";
	}
	else if (GMT % 3 == 1){
		var RGB = "Greenday";
	}
	else{
		var RGB = "Blueday";
	}
	if (GMT % 4 == 0){
		var haprph = "Hadeanday";
	}
	else if (GMT % 4 == 1){
		var haprph = "Archaeanday";
	}
	else if (GMT % 4 == 2){
		var haprph = "Proteroday";
	}
	else {
		var haprph = "Phaneroday";
	}
	
	if (GMT % 5 == 0){
		var dgra = "Darkday";
	}
	else if (GMT % 5 == 1){
		var dgra = "Graviday";
	}
	else if (GMT % 5 == 2){
		var dgra = "Emday";
	}
	else if (GMT % 5 == 3){
		var dgra = "Weakday";
	}
	else {
		var dgra = "Strongday";
	}
	
	if (GMT % 7 == 5){
		var week = "Monday";
	}
	else if (GMT % 7 == 6){
		var week = "Tuesday";
	}
	else if (GMT % 7 == 0){
		var week = "Wednesday";
	}
	else if (GMT % 7 == 1){
		var week = "Thursday";
	}
	else if (GMT % 7 == 2) {
		var week = "Friday";
	}
	else if (GMT % 7 == 3) {
		var week = "Saturday"
	}
	else {
		var week = "Sunday";
	}

	
	

	
	document.getElementById("txt").innerHTML =RGB + "-" + haprph + "-" + dgra + "-" + week;
      }, 100);
	
}
