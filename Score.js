function Score(startingScore){
    this.value = startingScore;
    var that = this,
        scoreLabel = document.getElementById("scoreLabel");
    var increment = function(){
        that.value += 1;
        adjustScoreLabel();
    }
    var incrementBy = function(incVal){
        checkIsNum(incVal);
        that.value += incVal;
        adjustScoreLabel();
    }
    
    function adjustScoreLabel(){
        scoreLabel.text("SCORE: " + that.value);
    }
}