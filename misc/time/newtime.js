function myFunction() {
  setInterval(function(){
    var d = new Date();
  var DD = String(d.getDate());
    var HH = String(d.getHours());
    var mm = String(d.getMinutes());
    var MM = String(d.getMonth() + 1);
    var YYYY = String(d.getFullYear());
    var YYfirst = YYYY.slice(0, -2);
    var YYsecond = YYYY.slice(2, 4);
    var SS = String(d.getSeconds());
    var minus = "-";
    var dabble = ":";
    var dot = "."
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
    document.getElementById("txt").innerHTML = DD + minus + HH + dabble + mm + minus + MM + minus + YYsecond + dot + YYfirst + minus + SS;
  }, 500);
}
