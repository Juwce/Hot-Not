///ELEMENTS///
var startButton = document.getElementById("startButton");
    mainImage = document.getElementById("mainImage"),
    hotButton = document.getElementById("hotButton"),
    notButton = document.getElementById("notButton"),
    ///GLOBALVALUES///
    SUBTRACTFROMTIMERONWRONGCLICK = 0,
    NEXTCLICKREADY = true;

//run on start of game
function initGame(){
    var score = new Score(0);
    var timer = new Timer(60);
    var images = allImages,
        waitingForFirstClick = true,
        currentImageIndex = getRandomIndexBetween(0,images.length - 1),
        currentImage = images[currentImageIndex],
        that = this,
        timerStart,
        checkTimer;

    //set main image and wait for start button click
    mainImage.src = currentImage.srcURL;
    hotButton.onclick = function(){runGame()};

    //start timer countdown, on click check if correct and react accordingly
    function runGame() {
        var gameOverVar = function(){gameOver()}
            timerStart = setInterval(function(){
            timer.subtractTime(1); if (timer.getTimeLeft() <= 0)
                gameOverVar();
            console.log(timer.getTimeLeft());
        }, 250);
        hotButton.onclick = function(){
            if(NEXTCLICKREADY)handleHotOrNotClick(true)
            NEXTCLICKREADY = false;
        };
        notButton.onclick = function(){
            if(NEXTCLICKREADY)handleHotOrNotClick(false)
            NEXTCLICKREADY = false;
        };
    };

    //add time to timer and increase score if right, opposite if wrong
    function handleHotOrNotClick(hotClickBool){
        console.log(JSON.stringify(currentImage));
        console.log(hotClickBool);
        var correct = currentImage.hotBool === hotClickBool;
        if(correct) {
            timer.addTime(3);
            score.incrementBy(currentImage.pointsWorth);
            //remove current image from array, get new current Image
            images.splice(currentImageIndex, 1);
            currentImageIndex = getRandomIndexBetween(0,images.length - 1);
            currentImage = images[currentImageIndex];
            mainImage.src = currentImage.srcURL;
        } else {
            timer.subtractTime(SUBTRACTFROMTIMERONWRONGCLICK);
            score.incrementBy(-1);
        }
        NEXTCLICKREADY = true;
    };

    function gameOver(){
        console.log("GAMEOVER");
        document.getElementById("startdiv").style.display = "none";
        document.getElementById("maindiv").style.display = "none";
        document.getElementById("losediv").style.display = "Block";
        clearInterval(timerStart);
        return;

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