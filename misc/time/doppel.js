function myFunction() {
  setInterval(function(){
    var d = new Date();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var SS = d.getSeconds();
    var minus = "-";
    var dabble = ":";
    var dot = "."
    var fraction = (HH / 24) + (mm / 60) + (SS / 60);
    var inputH = document.getElementById("inputH").value;
    var inputM = document.getElementById("inputM").value;
    var inputS = document.getElementById("inputS").value;
    var h = fraction / inputH;
    fraction = fraction - (h * inputH);
    var m = fraction / (inputM / inputH);
    fraction = fraction - (h * inputM);
    var s = fraction / (inputS / inputM / inputH);
    document.getElementById("txt").innerHTML = h + dabble + m + dabble + s;

    
  }, 50);
}
