function currentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var htime = document.getElementById("time");
    var currentTime;
    if (seconds<10){
        currentTime = hours + ":" + minutes + ":0" + seconds;
    }
    else {
        currentTime = hours + ":" + minutes + ":" + seconds;
    }
    htime.innerText = currentTime;
    console.log(currentTime);
}
setInterval(currentTime, 500);