// jQuery check
console.log($);

// start
$(document).ready(function(){
  $('#bbclogo').fadeIn(3500);
});

// reset animation
var reset = function(){
	var logoMargin = $("#bbclogo").css("marginRight");

	if(logoMargin === "62px" && $("#bbclogo").is(':visible')){

		return;

	} else {

		if($('#bbclogomini').is(':visible')){
			$('#bbclogomini').fadeOut();
		}

		if($('#bosaPress').is(':visible')){
			$('#bosaPress').fadeOut(1000);
				$('#bosaPress')
				  .queue(function (next) { 
				    $(bosaPress).css({"margin-right": ""}); 
				    next(); 
			});
			$('#bosaPress').fadeIn();
		}

		$('#bbclogo').fadeOut(1000);

		$('#bbclogo')
		  .delay(800)
		  .queue(function (next) { 
		    $(this).css({"margin-right": ""}); 
		    next(); 
		});

		$('#bbclogo').fadeIn();
	}
}

// reset on refresh
// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });

// sticky nav
var nav = $("#nav");
    scrolleNav = "navScrolled";
    heroImg = $('#heroImg').height() - 95; 

    console.log(heroImg);

$(window).scroll(function() {
  if($(this).scrollTop() > heroImg) {
    nav.addClass(scrolleNav);
    $("#about").css({"margin-top": "80px"});
  } else {
    nav.removeClass(scrolleNav);
    $("#about").css({"margin-top": ""});
  }
});


// active nav check
$("li").click(function() {
	$("li").addClass("disabled");
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");

    setTimeout(function() {
           $("li").removeClass("disabled");
       }, 3000);
});

// toggles
$('#home-toggle').click(function(){
	reset();
    $("html, body").animate({scrollTop:$('#about').offset().top - 40}, 2000);
  
});

$('#menu-toggle').click(function(){
		$('#bbclogo').fadeOut(1000);
		if($('#bosaPress').is(':visible')){
			$('#bosaPress').fadeOut(1000);
			$('#bosaPress')
			  .queue(function (next) { 
			    $(bosaPress).css({"margin-right": ""}); 
			    next(); 
		});
		$('#bosaPress').fadeIn();
	}
	$('#bbclogomini').delay(1000).fadeIn(2500);
});

$('#gallery-toggle').click(function(){
	reset();



	$('#bbclogo').animate({"margin-right": '+=850'}, 2000);	
});

$('#press-toggle').click(function(){
	reset();
	$('#bbclogo').animate({"margin-right": '+=50'}, 1200, function(){
		$("#bosaPress").animate({"margin-right": '+=700'}, 1300);
	});	
});



    