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