
function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    let month = date.getMonth();
    let full = date.getFullYear();
    console.log(day + ", " + month);
    console.log(full);
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

let r = 255;
let g = 222;
let b = 0;
let a = 0.7;
let isChangeBackground = true;

function changeBackground() {
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
        document.getElementById("header").style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }
}
if (isChangeBackground){
    setInterval(changeBackground, 15);
}

function blockChangeBackground() {
    isChangeBackground = !isChangeBackground;
}