function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let htime = document.getElementById("time");
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
    htime.innerText = currentTime;
    // console.log(currentTime);
}
setInterval(currentTime, 500);

let r = 255;    // Переменная для значения красного
let g = 222;    // Переменная для значения зелёного
let b = 0;      // Переменная для значения чёрного
let a = 0.7;    // Переменная для значения прозрачности
let isChangeBackground = false;

function changeBackground() {   //Функция, в которой изменияем цвет фона документа
    if (isChangeBackground){
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
        // Устанавливаем стиль backgroundColor элементу с id header--text
        document.getElementById("header--text").style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }
}

function blockChangeBackground() {
    isChangeBackground = !isChangeBackground;   //При вызове этой функции значение переменной isChangeBackground меняется на противоположное
    if (isChangeBackground){
        setInterval(changeBackground, 15);  //Функция setInterval запускает функцию changeBackground каждые 15 миллисекунд
    }
}