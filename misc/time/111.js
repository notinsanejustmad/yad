    
function myFunction() {
  setInterval(function(){
 var d = new Date();
    var h = "";
    var m = "";
    var s = "";
    var HH = d.getHours();
    var mm = d.getMinutes();
    var SS = d.getSeconds();
     var minus = "-";
    var dabble = ":";
    var dot = ".";
    for (i = -1; i < HH; i++){
      h = h + "|";
    }
             for (i = -1; i < mm; i++)
    {
      m = m + "|";
    }
        for (i = -1; i < SS; i++)
    {
      s = s + "|";
    }
             document.getElementById("txt").innerHTML = h + dabble + m + dabble + s;
}, 50);
}
