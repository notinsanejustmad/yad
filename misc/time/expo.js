    
function myFunction() {
  times = 500;
  s = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;
  setInterval(function(){
  var d = new Date();
  var HH = d.getHours();
  var mm = d.getMinutes();
  var SS = d.getSeconds();
    var fraction = (HH / 24) + (mm / (24 * 60)) + (SS / (24 * 60 * 60));
    var totalsec = (HH * 60 * 60) + (mm * 60) + SS;
    for (i = -1; i < totalsec; i++){
      if (sec < 60){
        sec += 1;
      }
      else {
        sec = 0;
        if (min < 60){
          min += 1;
        }
        else {
          min = 0;
          if (hour < 24){
            hour += 1;
          }
          else {
            hour = 0;
          }
        }
      }
    }
    fraction -= 0.5;
    times = time * fraction;
    
   
     if (sec < 60){
        sec += 1;
      }
      else {
        sec = 0;
        if (min < 60){
          min += 1;
        }
        else {
          min = 0;
          if (hour < 24){
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
