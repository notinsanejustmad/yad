  
let color_name = document.getElementById("color_name");


const color_change_func = () => {
    let temp = document.getElementById("color_changer");
  let rand_color = temp.value;
    let rand_hex_code = "#" + rand_color;
    
    
    
    document.body.style.backgroundColor = rand_hex_code;

    color_name.innerHTML = "color:<br>" + rand_hex_code;
}
