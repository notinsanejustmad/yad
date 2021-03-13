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
    document.getElementById(txt).innerHTML = DD + "-" + HH + ":" + mm + "-" MM + "-" + YYY + "-" + YYy + "-" + SS;
  }, 500);
}
