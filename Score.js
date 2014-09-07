function Score(startingScore){
    this.value = startingScore;
    var that = this,
        scoreLabel = document.getElementById("scoreLabel");
    scoreLabel.innerHTML = "SCORE: " + startingScore;
    
    var increment = function(){
        that.value += 1;
        adjustScoreLabel();
    };
    
    var incrementBy = function(incVal){
        that.value += incVal;
        adjustScoreLabel();
    };
    
    function adjustScoreLabel() {
        scoreLabel.innerHTML = "SCORE: " + that.value;
    }
}