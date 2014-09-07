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

Timer.prototype.addTime = function(timeToAdd){
    var timeLeft = this.timeLeft + timeToAdd <= TIMERSTARTINGSECONDS ? this.timeLeft += timeToAdd : this.timeLeft = TIMERSTARTINGSECONDS;
    var h = (this.timeLeft / TIMERSTARTINGSECONDS) * 272.0;
    if(h > 272.0) h = 272.0;
    redbar.style.height = h + "px";
};

Timer.prototype.subtractTime = function(timeToSub){
    this.timeLeft -= timeToSub;
    var h = (this.timeLeft / TIMERSTARTINGSECONDS) * 272.0;
    redbar.style.height = h + "px";
};