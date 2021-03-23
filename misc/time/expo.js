<!DOCTYPE html>
<html>
<body onload="myFunction()">

<p id="txt"></p>

<script>
 var times = 500;
function myFunction() {
var fraction = 0;
  var times = 1000;
  s = 0;
  var sec = 0;
  var min = 0;
  var hour = 20;
    var d = new Date();
  var HH = d.getHours();
  var mm = d.getMinutes();
  var SS = d.getSeconds();
	if (HH < 12){
    }


while (hour !== HH && sec !== SS && min !== mm){
fraction += 0.00001157407;
      if (sec < 59){
        sec += 1;
      }
      else {
        sec = 0;
        if (min < 59){
          min += 1;
        }
        else {
          min = 0;
          if (hour < 23){
            hour += 1;
          }
          else {
            hour = 0;
          }
        }
      }
      if (fraction == 0){
        fraction = 0.0000000000000000000001;
      }
    }

if (hour == HH && sec == SS && min == mm){
  setInterval(function(){

    if (fraction == 0){
      fraction = 0.0000000000000000000001;
    }
    
      if (fraction < 0.5){
      times = 1000;
  times = times * fraction;
  }
  else {
  times = 1000;
  times = times / fraction;
  }
   
     if (sec < 59){
        sec += 1;
      }
      else {
        sec = 0;
        if (min < 59){
          min += 1;
        }
        else {
          min = 0;
          if (hour < 23){
            hour += 1;
          }
          else {
            hour = 0;
          }
        }
      }
    
document.getElementById("txt").innerHTML = hour + ":" + min + ":" + sec;

}, times);
}
}

</script>

</body>
</html>
