$(function() {

$('.owl-carousel-coment').owlCarousel({
    loop: true,
   	margin: 10,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

var widthBodi = $('body').width();
var	widthContent = $('.container .content').width();
var	widthContentBox = $('.col-left-box').width();
var	leftOtstup = ((widthBodi - widthContent - widthContentBox) / 2) +30;
		console.log (widthBodi);
		console.log (widthContent);
		console.log (widthContentBox);
		console.log (leftOtstup);
if ( widthBodi >= 1200 ){
$('.col-left-box > div').css({'left': leftOtstup });
console.log ("da");
} else if ( widthBodi >= 992 ) {
	leftOtstup = leftOtstup - 30;
	console.log ("992");
	$('.col-left-box > div').css({'left': leftOtstup });
} else {
	leftOtstup = leftOtstup - 70;
	console.log ("992");
	$('.col-left-box > div').css({'left': leftOtstup });
};
$('body').scrollspy({ target: '#list-example' });


});
