    
function myFunction() {
  var d = new Date();
  var num = d.getHours()/d.getHours();
  var temp = num;
  temp++
  var num2 = (temp * temp * temp * temp * temp * temp * temp) - ((temp * temp * temp * temp * temp) - (temp + temp + num));
  for(i = num; num < num2; i++){
    console.log(i);
  }
}
