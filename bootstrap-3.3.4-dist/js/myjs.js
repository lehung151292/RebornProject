//jQuery to collapse the navbar on scroll
//$(window).scroll(function() {
   // if ($(".navbar").offset().top > 50) {
     //   $(".navbar-fixed-top").addClass("top-nav-collapse");
    //} else {
      //  $(".navbar-fixed-top").removeCla ss("top-nav-collapse");
    //}
//});

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".navbar").addClass("darknavbar");
		}
		else{
			$(".navbar").removeClass("darknavbar");
		}
}
);

//active wow 
new WOW().init();

//random background when f5
$(document).ready(function(){
var images=['img/black1.jpg',
            'img/black2.jpg',
            'img/black3.jpg',
            'img/black4.jpg',
            'img/black5.jpg',];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('header').css({'background':bgImg, 'background-size':'cover', });

});

//thay doi font khi co gian~ khung //
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );