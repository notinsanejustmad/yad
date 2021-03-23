function myFunction() {
  setInterval(function(){
    var d = new Date();
  var DD = String(d.getDate());
    var HH = String(d.getHours());
    var mm = String(d.getMinutes());
    var MM = String(d.getMonth() + 1);
    var YYYY = String(d.getFullYear());
    var ytemp = d.getFullYear();
    var YYfirst = YYYY.slice(0, -2);
    var YYsecond = YYYY.slice(2, 4);
    var SS = String(d.getSeconds());
    var minus = "-";
    var dabble = ":";
    var dot = "."
    ytemp = ytemp - 2012;
    
        if (DD > 21){
      DD = DD - 21;
    }
    else {
      var temp = DD;
      if (MM == 2||MM==4||MM==6||MM==8||MM==9||MM==11||MM==1){
        DD = 31-21;
        if (MM==1){
          MM = 12;
        }
        else{
        MM = MM - 1;
        }
          }
      else if(MM==3||MM==5||MM==7||MM==10||MM==12){
        DD = 30-21;
        MM = MM-1;
      }
      else{
        if (ytemp/4 === 0 && ytemp/100 === 0 && ytemp/400 === 0)
          DD = 29 - 21;
          MM = MM - 1;
      }
    }
      
    if (MM > 1){
      MM = MM - 1;
    }
    else {
      MM = 12;
    }
    if (SS < 10) {
  SS = "0" + SS;
}
    if (mm < 10) {
  mm = "0" + mm;
}
    if (MM < 10) {
  MM = "0" + MM;
}
    if (DD < 10) {
  DD = "0" + DD;
}
    if (HH < 10) {
  HH = "0" + HH;
}
    document.getElementById("txt").innerHTML = DD + minus + MM + minus + ytemp + " " + HH + dabble + mm + dabble + SS;
  }, 500);
}
