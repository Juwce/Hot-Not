///ELEMENTS///
var startButton = document.getElementById("startButton");
    mainImage = document.getElementById("mainImage"),
    hotButton = document.getElementById("hotButton"),
    notButton = document.getElementById("notButton"),
    ///GLOBALVALUES///
    SUBTRACTFROMTIMERONWRONGCLICK = 0;

//run on start of game
function initGame(){
    var score = new Score(0);
    var timer = new Timer(60);
    var images = allImages,
        waitingForFirstClick = true,
        currentImageIndex = getRandomIndexBetween(0,images.length),
        currentImage = images[currentImageIndex],
        timerStart,
        checkTimer;

    //set main image and wait for start button click
    mainImage.src = currentImage.srcURL;
    hotButton.onclick=function(){runGame()};

    //start timer countdown, on click check if correct and react accordingly
    function runGame() {
        console.log("YEEEE");
        timerStart = setInterval(timer.subtractTime(1), 1000);
        checkTimer = setInterval(checkTimer(timer), 1000);
        hotButton.click(handleHotOrNotClick(true));
        notButton.click(handleHotOrNotClick(false));
    };

    //add time to timer and increase score if right, opposite if wrong
    function handleHotOrNotClick(hotClickBool){
        var correct = currentImage.hotBool === hotClickBool;
        if(correct) {
            timer.addTime(3);
            score.incrementBy(currentImage.pointsWorth);
        } else {
            timer.subtractTime(SUBTRACTFROMTIMERONWRONGCLICK);
            score.incrementBy(-1);
        }
        //remove current image from array, get new current Image
        images.splice(currentImageIndex, 1);
        currentImageIndex = getRandomIndexBetween(0,images.length);
        currentImage = images[currentImageIndex];
    }

    function gameOver(){
        clearInterval(timerStart);
        clearInterval(checkTimer);
        initGame();
        return;

    };

    function checkTimer(timer){
        if (timer.timeLeft <= 0)
            gameOver();
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