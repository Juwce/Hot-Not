//to start timer: var timerStart = setInterval(Timer.subtractTime(1), 1000);
//to stop timer: clearInterval(timerStart);
function Timer(timeLeft){
    this.timeLeft = timeLeft;
    var that = this,
        timeLabel = document.getElementById("timerLabel");
    timeLabel.innerHTML = "TIME: " + timeLeft;

    var addTime = function(timeToAdd){
        that.timeLeft += timeToAdd;
        adjustTimerLabel();
    };
    var subtractTime = function(timeToSub){
        that.timeLeft -= timeToSub;
        adjustTimerLabel();
    };
    function adjustTimerLabel(){
        timeLabel.innerHTML = "TIME: " + that.timeLeft;
    }
}