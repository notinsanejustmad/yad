function myFunction() {
  setInterval(function(){
    var d = new Date();
    var HH = d.getHours();
    var mm = d.getMinutes();
    var SS = d.getSeconds();
    var minus = "-";
    var dabble = ":";
    var dot = "."
    var fractionH = (HH / 24);
    var fractionM = (mm / 60);
    var fractionS = (SS / 60);
    var inputH = document.getElementById("inputH").value;
    var inputM = document.getElementById("inputM").value;
    var inputS = document.getElementById("inputS").value;
    var h = Math.trunc(fractionH / (1 / inputH));
    var m = Math.trunc(fractionM / (1 / inputM));
    var s = Math.trunc(fractionS / (1 / inputS));
    document.getElementById("txt").innerHTML = h + dabble + m + dabble + s;

    
  }, 50);
}
