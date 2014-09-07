///ELEMENTS///
var startButton = document.getElementById("startButton");
    mainImage = document.getElementById("mainimage"),
    hotButton = document.getElementById("hotButton"),
    notButton = document.getElementById("notButton"),

///GLOBALVALUES///
var SUBTRACTFROMTIMERONWRONGCLICK = 0;

//run on start of game
function initGame(){
    var Score = new Score(0),
        Timer = new Timer(60),
        Images = allImages,
        waitingForFirstClick = true,
        currentImageIndex = getRandomIndexBetween(0,Images.length),
        currentImage = Images[currentImageIndex],
        timerStart,
        checkTimer;
    
    //set main image and wait for start button click
    mainImage.attr("src", currentImage.srcURL);
    hotButton.click(runGame);  
    
    //start timer countdown, on click check if correct and react accordingly
    function runGame() {
        timerStart = setInterval(Timer.subtractTime(1), 1000);
        checkTimer = setInterval(checkTimer(Timer), 1000);
        hotButton.click(handleHotOrNotClick(true));
        notButton.click(handleHotOrNotClick(false));
    }
    
    //add time to timer and increase score if right, opposite if wrong
    function handleHotOrNotClick(hotClickBool){
        var correct = currentImage.hotBool === hotClickBool;
        if(correct) {
            Timer.addTime(3);
            Score.incrementBy(currentImage.pointsWorth);
        } else {
            Timer.subtractTime(SUBTRACTFROMTIMERONWRONGCLICK);
            Score.incrementBy(-1);
        }
        //remove current image from array, get new current Image
        Images.splice(currentImageIndex, 1);
        currentImageIndex = getRandomIndexBetween(0,Images.length);
        currentImage = Images[currentImageIndex];
        }
    }
    
    function gameOver(){
        clearInterval(timerStart);
        clearInterval(checkTimer);
        initGame();
        return;
        
    }

    function checkTimer(timer){
        if (timer.timeLeft <= 0)
            gameOver();
    }

    function getRandomIndexBetween(firstIndex, lastIndex){
        var difference = lastIndex - firstIndex,
            toReturn = (Math.random() * difference) + firstIndex);
        return Math.round(toReturn);
    }
    
    function getRandomImage(){
        return Images[getRandomIndexBetween(firstIndex, lastIndex)];
    }
}
    