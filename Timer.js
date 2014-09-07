//to start timer: var timerStart = setInterval(Timer.subtractTime(1), 1000);
//to stop timer: clearInterval(timerStart);
var timeLabel = document.getElementById("timerLabel");

function Timer(timeLeft){
    this.timeLeft = timeLeft;
    var that = this;
    timeLabel.innerHTML = "TIME: " + timeLeft;
}

Timer.prototype.getTimeLeft = function(){
    return this.timeLeft;
}

Timer.prototype.addTime = function(timeToSub){
    this.timeLeft += timeToSub;
    timeLabel.innerHTML = "TIME: " + this.timeLeft;
};

Timer.prototype.subtractTime = function(timeToSub){
    this.timeLeft -= timeToSub;
    timeLabel.innerHTML = "TIME: " + this.timeLeft;
};