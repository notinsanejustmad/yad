function myFunction() {
  setInterval(function(){
    var d = new Date();
  var DD = String(d.getDate());
    var HH = String(d.getHours());
    var mm = String(d.getMinutes());
    var MM = String(d.getMonth());
    var YYYY = String(d.getFullYear());
    var YYfirst = YYYY.slice(0, 3);
    var YYsecond = YYYY.slice(3, 5);
    var SS = String(d.getSeconds());
    var minus = "-";
    var dabble = ":";
    document.getElementById("txt").innerHTML = DD + minus + HH + dabble + mm + minus + MM + minus + YYsecond + minus + YYfirst + minus + SS;
  }, 500);
}
