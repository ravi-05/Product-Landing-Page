$(document).ready(function(){

    $('body').scrollspy({target: ".navbar-nav", offset: 67});

    $(".navbar-nav a").on('click' ,function(event){
        if(this.hash !== ""){
            
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },800,function(){
                window.location.hash = hash;
            });

            $(".navbar-collapse").collapse("hide");
        }
    });

    $('#product-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});