  
let color_name = document.getElementById("color_name");


const color_change_func = () => {
  let rand_color = document.getElementById("colorChoice").value;
    
    
    
    document.body.style.backgroundColor = rand_color;

    color_name.innerHTML = "color:<br>" + rand_color;
}
