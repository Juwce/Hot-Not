//to start timer: var timerStart = setInterval(Timer.subtractTime(1), 1000);
//to stop timer: clearInterval(timerStart);
function Timer(timeLeft){
    this.timeLeft = timeLeft;
    var that = this;
    var addTime = function(timeToAdd){
        that.timeLeft += timeToAdd;
    }
    var subtractTime = function(timeToSub){
        that.timeLeft -= timeToSub;
    }
}