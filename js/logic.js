///ELEMENTS///
var startButton = document.getElementById("startButton"),
    mainImage = document.getElementById("mainImage"),
    hotButton = document.getElementById("hotButton"),
    notButton = document.getElementById("notButton"),
    ///GLOBALVALUES///
    SUBTRACTFROMTIMERONWRONGCLICK = 5,
    RIGHTCLICKSCORE = 5,
    TIMESUBTRACTPERINTERVAL = 0.1,
    INTERVALLENGTHINMILLISECONDS = 3,
    TIMERSTARTINGSECONDS = 50,
    POINTMULTIPLIER = 100,
    WRONGCLICKSCORE = -2;

//preload images
function preload(){
    document.getElementById("preloadLabel").innerHTML = "loading";
    var imgs = allImages();
    for (i = 0; i < imgs; i < imgs.length) {
        var img = new Image();
        img.style.left = -9999;
        img.src=imgs[i];
    }
    document.getElementById("preloadLabel").innerHTML = "loaded!";
}

preload();

//run on start of game
function initGame(){
    if(getHighScore() === null) setHighScore(0);
    if(getBestTime() === null) setBestTime(100000);
    var score = new Score(0);
    var timer = new Timer(TIMERSTARTINGSECONDS);
    var gameTimer = new Timer(0);
    var images = allImages(),
        nextClickReady = false,
        waitingForFirstClick = true,
        currentImageIndex = getRandomIndexBetween(0,images.length - 1),
        currentImage = images[currentImageIndex],
        that = this,
        timerStart,
        gameTimerStart,
        checkIfWon;

    //set main image and wait for start button click
    mainImage.src = currentImage.srcURL;
    hotButton.onclick = function(){if(waitingForFirstClick) runGame(); waitingForFirstClick = false;};
    notButton.onclick = function(){if(waitingForFirstClick) runGame(); waitingForFirstClick = false;};

    //start timer countdown, on click check if correct and react accordingly
    function runGame() {
        nextClickReady = true;
        var gameOverVar = function() {gameOver()};
        timerStart = setInterval(function(){
            timer.subtractTime(TIMESUBTRACTPERINTERVAL); 
            if (timer.getTimeLeft() <= 0)gameOverVar();
        }, INTERVALLENGTHINMILLISECONDS);
        gameTimerStart = setInterval(function(){gameTimer.addGameTime(.1)}, 100);
        checkIfWon = setInterval(function(){if(images.length < 1) gameWon()}, 50);

        hotButton.onclick = function(){if(nextClickReady)nextClickReady = handleHotOrNotClick(true)};
        notButton.onclick = function(){if(nextClickReady)nextClickReady = handleHotOrNotClick(false)};

    };

    //add time to timer and increase score if right, opposite if wrong
    function handleHotOrNotClick(hotClickBool){
        var correct = currentImage.hotBool === hotClickBool;
        if(correct) {
            if(images.length <= 1) gameWon();
            timer.addTime(RIGHTCLICKSCORE);
            score.incrementBy(currentImage.pointsWorth);
            //remove current image from array, get new current Image
            images.splice(currentImageIndex, 1);
            if(images.length <= 1) gameWon();
            currentImageIndex = getRandomIndexBetween(0,images.length - 1);
            currentImage = images[currentImageIndex];
            mainImage.src = currentImage.srcURL;
        } else {
            timer.subtractTime(SUBTRACTFROMTIMERONWRONGCLICK);
            score.incrementBy(WRONGCLICKSCORE);
        }
        return true;
    };

    function gameWon(){
        clearInterval(timerStart);
        clearInterval(gameTimerStart);
        console.log("GAME WON!!");
        clearInterval(checkIfWon);
        navigateToMenuScreenWithText("YOU WIN!!!");
        var highScoreLabel = document.getElementById("highScoreLabel");
        highScoreLabel.style.display = "block";
        highScoreLabel.innerHTML = "HIGH SCORE: " + evaluateHighScore() + "\nIN " + evaluateBestTime() + " SECONDS";
        var finalScoreLabel = document.getElementById("finalScoreLabel");
        finalScoreLabel.style.display = "block";
        finalScoreLabel.innerHTML = "YOUR SCORE: " + score.getValue() + "\nIN " + gameTimer.timeLeft + " SECONDS";
        initGame();
        return;
    }

    function gameOver(){
        clearInterval(timerStart);
        clearInterval(gameTimerStart);
        console.log("GAMEOVER");
        clearInterval(checkIfWon);
        navigateToMenuScreenWithText("GAME OVER");
        var highScoreLabel = document.getElementById("highScoreLabel");
        highScoreLabel.style.display = "block";
        highScoreLabel.innerHTML = "HIGH SCORE: " + evaluateHighScore() + " IN " + evaluateBestTime() + " SECONDS";
        var finalScoreLabel = document.getElementById("finalScoreLabel");
        finalScoreLabel.style.display = "block";
        finalScoreLabel.innerHTML = "YOUR SCORE: " + score.getValue() + " IN " + gameTimer.timeLeft + " SECONDS";
        initGame();
        return;
    };

    function navigateToMenuScreenWithText(text){
        document.getElementById("loseLabel").innerHTML = text;
        document.getElementById("startdiv").style.display = "none";
        document.getElementById("maindiv").style.display = "none";
        document.getElementById("highScoreLabel").style.display = "block";
        document.getElementById("losediv").style.display = "Block";
        document.getElementById("finalScoreLabel").style.display = "Block";
    }
    
    initGame.prototype.checkTimer = function(timer){
        if (timer.timeLeft <= 0)
            this.gameOver();
    };

    function getRandomIndexBetween(firstIndex, lastIndex){
        var difference = lastIndex - firstIndex,
            toReturn = (Math.random() * difference) + firstIndex;
        return Math.round(toReturn);
    };

    function getRandomImage(){
        return images[getRandomIndexBetween(firstIndex, lastIndex)];
    };

    function evaluateBestTime(){
        if(Number(getBestTime()) > gameTimer.timeLeft) {
            var roundedTime = Math.round(gameTimer.timeLeft*10)/10.0;
            setBestTime(roundedTime);
        }
        console.log(roundedTime);
        return getBestTime();
    };
    
    function getBestTime(){
        return localStorage.getItem("bestTime");
    };
    
    function setBestTime(time){
        return localStorage.setItem("bestTime", time);
    };
    
    function evaluateHighScore(){
        if(Number(getHighScore()) < score.getValue()) setHighScore(score.getValue());
        return getHighScore();
    };
    
    function getHighScore(){
        return localStorage.getItem("highscore");
    };

    function setHighScore(value){
        return localStorage.setItem("highscore", value);
    }
};