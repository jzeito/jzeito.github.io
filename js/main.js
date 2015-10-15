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


 $('.about').click(function(e){    
    $('.top').fadeIn('slow', function(){
        $('.container').fadeIn('slow');
        $('.container-img').fadeOut('slow');
        $('html,body').animate({
            scrollTop: document.body.offsetHeight- window.innerHeight
        }, 1000);
    });
});

$('#return').click(function(e){    
    $('.container').fadeOut('fast', function(){
        $('.top').fadeIn('fast');
    });
});
    
$('.portfolio').click(function(e){    
    $('.container').fadeOut('fast', function(){
        $('.container-img').fadeIn('fast');
        $('html,body').animate({
            scrollTop: document.body.offsetHeight- window.innerHeight
        }, 1000);
    });
});

$('#return1').click(function(e){    
    $('.container-img').fadeOut('fast', function(){
        $('.top').fadeIn('fast');
    });
});
    

});