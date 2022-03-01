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
	
	if (HH > 12){
		HH -= 12;
	}
	HH = ((totalsec/60/60/24)*360)/57,29577951;
	mm = (((temp+ss)/60/60)*360)/57,29577951;
	ss = (((ss*1000)+ms)/1000/60*360)/57,29577951;
	HH = HH.toFixed(2);
	mm = mm.toFixed(2);
	ss = ss.toFixed(2);
	HH = HH.toString();
	mm = mm.toString();
	ss = ss.toString();
	
	
	
	document.getElementById("txt").innerHTML = HH + ":" + mm + ":" + ss;
      }, 50);
	
}
