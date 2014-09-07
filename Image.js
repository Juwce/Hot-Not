function Image(srcURL, hotBool, pointsWorth, name ){
    this.srcURL = srcURL;
    this.hotBool = hotBool;
    this.pointsWorth = pointsWorth;
    this.name = name === null ? "no name given" : name;
};

var allImages = [
    new Image( "/img/chair.jpg" , false , 4, "chair" ),
        new Image( "/img/clubpenguin.jpg" , false , 2, "clubpenguin" ),
        new Image( "/img/desert.jpg" , true , 3, "desert" ),
        new Image( "/img/drink.jpg" , false , 2, "drink" ),
        new Image( "/img/fire.jpg" , false , 3, "fire" ),
        new Image( "/img/forest.jpg" , false , 2, "forest" ),
        new Image( "/img/freezer.jpg" , false , 3, "freezer" ),
        new Image( "/img/icedesert.jpg" , false , 3, "icedesert" ),
        new Image( "/img/laptop.jpg" , true , 5, "laptop" ),
        new Image( "/img/nokia.jpg" , false , 5, "nokia" ),
        new Image( "/img/northpole.jpg" , false , 3, "northpole" ),
        new Image( "/img/pepper.jpg" , true , 3, "pepper" ),
        new Image( "/img/road.jpg" , true , 3, "road" ),
        new Image( "/img/snow.jpg" , false , 2, "snow" ),
        new Image( "/img/space.jpg" , false , 7, "space" );
];