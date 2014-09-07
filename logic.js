///ELEMENTS///
var startButton = document.getElementById("startButton");
mainImage = document.getElementById("mainImage"),
    hotButton = document.getElementById("hotButton"),
    notButton = document.getElementById("notButton"),
    ///GLOBALVALUES///
    SUBTRACTFROMTIMERONWRONGCLICK = 3,
    ADDTORIGHTCLICK = 10,
    TIMESUBTRACTPERINTERVAL = .1,
    INTERVALLENGTHINMILLISECONDS = 3;
TIMERSTARTINGSECONDS = 60, //keep at 60 or else thermometer breaks
    POINTMULTIPLIER = 100;

//run on start of game
function initGame(){
    var score = new Score(0);
    var timer = new Timer(TIMERSTARTINGSECONDS);
    var images = allImages,
        nextClickReady = true,
        waitingForFirstClick = true,
        currentImageIndex = getRandomIndexBetween(0,images.length - 1),
        currentImage = images[currentImageIndex],
        that = this,
        timerStart,
        checkIfWon;

    //set main image and wait for start button click
    mainImage.src = currentImage.srcURL;
    hotButton.onclick = function(){runGame()};

    //start timer countdown, on click check if correct and react accordingly
    function runGame() {
        timerStart = setInterval(function(){
            timer.subtractTime(TIMESUBTRACTPERINTERVAL); if (timer.getTimeLeft() <= 0)
                gameOverVar();
            console.log(timer.getTimeLeft());
        }, INTERVALLENGTHINMILLISECONDS);
        checkIfWon = setInterval(function(){if(images.length < 1) gameWon();}, 50);

        hotButton.onclick = function(){
            if(nextClickReady) nextClickReady = handleHotOrNotClick(true);
        };
        notButton.onclick = function(){
            console.log(nextClickReady);
            if(nextClickReady)nextClickReady = handleHotOrNotClick(false);
        };
    };

    //add time to timer and increase score if right, opposite if wrong
    function handleHotOrNotClick(hotClickBool){
        if(images.length < 1) gameWon();
        var correct = currentImage.hotBool === hotClickBool;
        if(correct) {
            timer.addTime(ADDTORIGHTCLICK);
            score.incrementBy(currentImage.pointsWorth);
            //remove current image from array, get new current Image
            images.splice(currentImageIndex, 1);
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
        console.log("GAME WON!!");        
        clearInterval(timerStart);
        clearInterval(checkIfWon);
        document.getElementById("loseLabel").innerHTML = "YOU WIN!!";
        document.getElementById("startdiv").style.display = "none";
        document.getElementById("maindiv").style.display = "none";
        document.getElementById("losediv").style.display = "Block";
    }

    function gameOver(){
        console.log("GAMEOVER");
        clearInterval(timerStart);
        clearInterval(checkIfWon);
        document.getElementById("startdiv").style.display = "none";
        document.getElementById("maindiv").style.display = "none";
        document.getElementById("losediv").style.display = "Block";
        document.getElementById("loseLabel").innerHTML = "GAME OVER";
    };

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
};