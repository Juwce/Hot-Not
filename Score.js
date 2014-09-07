var scoreLabel = document.getElementById("scoreLabel");

function Score(startingScore){
    this.value = startingScore;
    var that = this;
 
    scoreLabel.innerHTML = "SCORE: " + startingScore;
    
    var increment = function(){
        that.value += 1 * POINTMULTIPLIER;
    };
}

Score.prototype.incrementBy = function(incVal){
    this.value += (incVal * POINTMULTIPLIER);
    scoreLabel.innerHTML = "SCORE: " + this.value;
};