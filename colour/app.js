let color_name = document.getElementById("color_name");


const color_change_func = () => {
    let rand_color = Math.floor(Math.random()*16777215).toString(16);
    let rand_hex_code = "#" + rand_color;
    document.body.style.backgroundColor = rand_hex_code;

    color_name.innerHTML = "color:<br>"rand_hex_code;
}
