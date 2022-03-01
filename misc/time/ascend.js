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
	
	if (HH >= mm && HH >= ss){
		var txt1 = HH;
		if (mm >= ss){
			var txt2 = mm;
			var txt3 = ss;
		}
		else {
			var txt2 = ss;
			var txt3 = mm;
		}
	}
	else if (mm > HH && mm >=ss) {
		var txt1 = mm;
			if (HH >= ss){
			var txt2 = HH;
			var txt3 = ss;
		}
		else {
			var txt2 = ss;
			var txt3 = HH;
		}
	}
		else if (ss > HH && ss >mm) {
		var txt1 = ss;
			if (HH >= mm){
			var txt2 = HH;
			var txt3 = mm;
		}
		else {
			var txt2 = mm;
			var txt3 = HH;
		}
	}
	
	

	document.getElementById("txt").innerHTML =txt1 + ":" + txt2 + ":" + txt3;
      }, 100);
	
}
