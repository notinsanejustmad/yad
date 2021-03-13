function myFunction() {
  setInterval(function(){
  var DD = getDate();
    var HH = getHours();
    var mm = getMinutes();
    var MM = getMonth();
    var YYYY = getFullYear();
    var YYy = YYYY.slice(0, 3);
    var YYY = YYYY.slice(3, 5);
    var SS = getSeconds();
    var minus = "-";
    var dabble = ":";
    document.getElementById(txt).innerHTML = string.concat(DD, minus, HH, dabble, mm, minus, MM, minus, YYY, minus, YYy, minus, SS);
  }, 500);
}
