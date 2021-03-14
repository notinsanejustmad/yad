function myFunction() {
  setInterval(function(){
    var d = new Date();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    var totalsec = HH * 60 * 60;
    var temp = mm * 60;
    var DD = d.getDay();
    var dayhex = "hex";
        if (DD < 16) {
          DD.toString(16).toUpperCase();
  dayhex = "0" + dayhex;
}
    else {
      DD.toString(16).toUpperCase();
    }

    totalsec = totalsec + temp + ss;
    var total = 86400;
    var ini = total / totalsec;
    var newtemp = 65536 / ini;
    newtemp = Math.trunc(newtemp);
    var end = newtemp.toString(16).toUpperCase();
    var hexcol = dayhex + end;
    document.body.style.backgroundColor = hexcol;
    document.getElementById("txt").innerHTML = hexcol;
      }, 50);
}
