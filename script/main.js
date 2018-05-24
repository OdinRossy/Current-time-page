function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = $("#time");
    let currentTime;
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (hours < 10){
        hours = "0" + hours;
    }
    currentTime = hours + ":" + minutes + ":" + seconds;
    time.text(currentTime);
}
setInterval(currentTime, 500);

let r = 255;    // Переменная для значения красного
let g = 222;    // Переменная для значения зелёного
let b = 0;      // Переменная для значения чёрного
let a = 0.0;    // Переменная для значения прозрачности
let isChangeBackground = true;
let interval = setInterval(changeBackground, 15);
let header_time = $("#header-text");
let header_color;

header_time.click(function () {
    isChangeBackground = !isChangeBackground;   //При вызове этой функции значение переменной isChangeBackground меняется на противоположное
    if (isChangeBackground){
        interval = setInterval(changeBackground, 15);  //Функция setInterval запускает функцию changeBackground каждые 15 миллисекунд
    }
    else {
        clearInterval(interval); //Очищаем интервал, если значение isChangeBackground = false
    }
});

function changeBackground() {   //Функция, в которой изменияем цвет фона документа
    if (isChangeBackground){
        if (a<0.6){
            a+=0.005;
        }
        if (r===255 && b===0) {
            g++;
        }
        if (g===255 && b===0) {
            r--;
        }
        if (r===0 && g===255) {
            b++;
        }
        if (r===0 && b===255) {
            g--;
        }
        if (g===0 && b===255) {
            r++;
        }
        if (r===255 && g===0) {
            b--;
        }
        // Устанавливаем стиль backgroundColor элементу с id header-text
        header_color = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        header_time.css("background-color", header_color);
        header_time.css("box-shadow", "0 5px 100px " + header_color)
        // document.getElementById("header-text").style.backgroundColor = header_color;
        // document.getElementById("header-text").style.boxShadow = header_color;
    }
}