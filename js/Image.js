function Image(srcURL, hotBool, pointsWorth, name ){
    this.srcURL = srcURL;
    this.hotBool = hotBool;
    this.pointsWorth = pointsWorth;
    this.name = name === null ? "no name given" : name;
};

var allImages = function(){ 
    return [
        new Image( "img/chair.jpg" , false , 4, "chair" ),
        new Image( "img/clubpenguin.jpg" , false , 2, "clubpenguin" ),
        new Image( "img/desert.jpg" , true , 3, "desert" ),
        new Image( "img/drink.jpg" , false , 2, "drink" ),
        new Image( "img/fire.jpg" , true , 3, "fire" ),
        new Image( "img/forest.jpg" , false , 2, "forest" ),
        new Image( "img/freezer.jpg" , false , 3, "freezer" ),
        new Image( "img/icedesert.jpg" , false , 3, "icedesert" ),
        new Image( "img/laptop.jpg" , true , 5, "laptop" ),
        new Image( "img/nokia.jpg" , false , 5, "nokia" ),
        new Image( "img/northpole.jpg" , false , 3, "northpole" ),
        new Image( "img/pepper.jpg" , true , 3, "pepper" ),
        new Image( "img/road.jpg" , true , 3, "road" ),
        new Image( "img/snow.jpg" , false , 2, "snow" ),
        new Image( "img/space.jpg" , false , 7, "space" ),
        new Image("https://c1.staticflickr.com/9/8371/8378452536_21a35d8230_z.jpg", true, 5, "gravy"),
        new Image("http://upload.wikimedia.org/wikipedia/commons/a/a4/Java_logo_and_wordmark.svg", false, 4, "java"),
        new Image("http://upload.wikimedia.org/wikipedia/commons/1/12/MVC-013F.jpg", true, 4, "hot glue gun"),
        new Image("http://upload.wikimedia.org/wikipedia/commons/b/ba/Thermometer.jpg", false, 3, "thermometer"),
        new Image("https://c2.staticflickr.com/8/7205/6991093521_3d98055c53_z.jpg", false, 3, "stove"),
        new Image("http://www.blogcdn.com/green.autoblog.com/media/2007/08/lipo-battery.jpg", true, 2, "lipo"),
        new Image("https://c2.staticflickr.com/4/3088/3157251517_3af1e7362c_z.jpg?zz=1", true, 3, "sun"),
        new Image("http://upload.wikimedia.org/wikipedia/commons/7/74/Moon-watching-night-100916-02.jpg", false, 2, "moon"),
        new Image("https://c2.staticflickr.com/2/1270/1318690874_000639cfcc_z.jpg?zz=1", true, 4, "lava cake"),
    ];
}