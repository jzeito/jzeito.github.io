$(window).resize(function(){
    var windowWidth = $(window).width();
    var imgSrc = $('#image');
    if(windowWidth <= 800){         
        imgSrc.attr('src','image1.jpg');
    }
    else if(windowWidth > 800){
        imgSrc.attr('src','image2.jpg');
    }
});