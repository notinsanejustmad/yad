function myFunction() {
  setInterval(function(){
    var d = new Date();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var SS = d.getSeconds();
    var minus = "-";
    var dabble = ":";
    var dot = "."
    var fraction = (HH / 24) + (mm / (24 * 60)) + (SS / (24 * 60 * 60));
    var inputH = document.getElementById("inputH").value;
    var inputM = document.getElementById("inputM").value;
    var inputS = document.getElementById("inputS").value;
    var h = Math.trunc(fraction / (1 / inputH));
    var fraction = fraction - (h * (1 / inputH));
    var m = Math.trunc(fraction / (1 / inputM / inputH));
    var fraction = fraction - (m * (1 / inputM / inputH));
    var s = Math.trunc(fraction / (1 / inputS / inputM /inputH));
    document.getElementById("txt").innerHTML = h + dabble + m + dabble + s;

    
  }, 50);
}
