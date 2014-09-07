var scoreLabel = document.getElementById("scoreLabel");

function Score(startingScore){
    this.value = startingScore;
    var that = this;
 
    scoreLabel.innerHTML = "SCORE: " + startingScore;
    
    var increment = function(){
        that.value += 1;
    };
}

Score.prototype.incrementBy = function(incVal){
    this.value += incVal;
    scoreLabel.innerHTML = "SCORE: " + this.timeLeft;
};