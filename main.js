function currentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var htime = document.getElementById("time")
    var currentTime = hours + ":" + minutes + ":" + seconds;
    htime.innerHTML = currentTime;
    console.log(currentTime);
}
setInterval(currentTime, 500);