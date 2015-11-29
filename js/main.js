$(document).ready(function(){
   
$('a[href*=#]:not([href=#])').click(function() {    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
            return false;
        }
        
    }
});

$('.reel').click(function(e){    
    $('.container1, .container-img').fadeOut('slow', function(){
        $('.embed-responsive, .top').fadeIn('fast');
        $('html,body').animate({
            scrollTop: document.body.offsetHeight- window.innerHeight
        }, 1000);
    });
});


$('.portfolio').click(function(e){    
    $('.container1, .embed-responsive').fadeOut('slow', function(){
        $('.container-img').fadeIn('fast');
        $('html,body').animate({
            scrollTop: 900
        }, 1000);
    });
});

$('#portfolioback a').click(function(e){    
    $('.container-img, .embed-responsive, .container1').fadeOut('slow', function(){
        $('.top').fadeIn('fast');
    });
});

 $('.about').click(function(e){    
    $('.top').fadeIn('slow', function(){
        $('.container1').fadeIn('slow');
        $('.container-img, .embed-responsive').fadeOut('slow');
        $('html,body').animate({
            scrollTop: document.body.offsetHeight- window.innerHeight
        }, 1000);
    });
});

$('#return').click(function(e){    
    $('.container1, .socialmedia').fadeOut('fast', function(){
        $('.top').fadeIn('fast');
    });
});


 $('.contact').click(function(e){    
    $('.top').fadeIn('slow', function(){
        $('.socialmedia').fadeIn('fast');
        $('.container-img, .embed-responsive, .container1').fadeOut('slow');
        $('html,body').animate({
            scrollTop: document.body.offsetHeight- window.innerHeight
        }, 1000);
    });
});

$('#backcontact a').click(function(e){    
    $('.socialmedia').fadeOut('slow', function(){
        $('.top').fadeIn('fast');
    });
});

    
});