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
    document.getElementById("txt").innerHTML = DD + minus + HH + dabble + mm + minus + MM + minus + YYsecond + minus + YYfirst + minus + SS;
  }, 500);
}
