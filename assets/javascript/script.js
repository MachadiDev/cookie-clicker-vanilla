const contador_cookies = document.getElementById("n-cookies");
const cookie_por_segundo = document.getElementById("cookie-segundo-js");
const cookie_clicker = document.getElementsByTagName("img");
const bonus_item1 = document.getElementsByClassName("item1");

var cookies = 25;
var TotalCookies = 0;
var valor_click = 1;
var cookie_segundo = 0;
var game = true;

function incrementa() {
    cookies = cookies + valor_click;
    contador_cookies.innerHTML = cookies.toFixed(0) + " Cookies";
}

clicker = new bonus("clicker", 20.0, 0.1);
clicker.compraBonus();
cookie_segundo = clicker.aumentoBonus();

if (cookie_segundo !== 0.0) {
    setInterval(function incrementa_por_segundo() {
        cookies = cookies + cookie_segundo;
        cookie_por_segundo.innerHTML = "Por segundo: " + cookie_segundo;
        contador_cookies.innerHTML = cookies.toFixed(0) + " Cookies";
    }, 1000);

}






