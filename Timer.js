//to start timer: var timerStart = setInterval(Timer.subtractTime(1), 1000);
//to stop timer: clearInterval(timerStart);
var redbar = document.getElementById("redbar");

function Timer(timeLeft){
    this.timeLeft = timeLeft;
    var that = this;
    redbar.style.height = "272px";
}

Timer.prototype.getTimeLeft = function(){
    return this.timeLeft;
}

Timer.prototype.addTime = function(timeToSub){
    this.timeLeft += timeToSub;
    var h = (this.timeLeft / 60.0) * 272.0;
    redbar.style.height = h + "px";
    if (this.timeLeft > 60)
        this.timeL = 60;
};

Timer.prototype.subtractTime = function(timeToSub){
    this.timeLeft -= timeToSub;
    var h = (this.timeLeft / 60.0) * 272.0;
    redbar.style.height = h + "px";
};