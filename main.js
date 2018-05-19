function currentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var htime = document.getElementById("time");
    var currentTime;
    if (seconds<10){
        seconds = "0" + seconds;
    }

    if (minutes<10){
        minutes = "0" + minutes;
    }
    if (hours<10){
        hours = "0" + hours;
    }

    currentTime = hours + ":" + minutes + ":" + seconds;

    htime.innerText = currentTime;
    console.log(currentTime);
}
setInterval(currentTime, 500);