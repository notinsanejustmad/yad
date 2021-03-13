function myFunction() {
  setInterval(function(){
    var d = new Date();
  var DD = d.getDate();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var MM = d.getMonth();
    var YYYY = d.getFullYear();
    var YYfirst = YYYY.slice(0, 3);
    var YYsecond = YYYY.slice(3, 5);
    var SS = d.getSeconds();
    var minus = "-";
    var dabble = ":";
    document.getElementById(txt).innerHTML = string.concat(DD, minus, HH, dabble, mm, minus, MM, minus, YYsecond, minus, YYfirst, minus, SS);
  }, 500);
}
