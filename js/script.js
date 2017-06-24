// jQuery check
console.log($);

// start
$(document).ready(function(){
  $('#bbc-logo').fadeIn(3500);
});

// reset animation
var reset = function(){
	var logoMargin = $("#bbclogo").css("marginRight");

	if(logoMargin === "3.875em" && $("#bbclogo").is(':visible')){

		console.log('some reset');

		if($('#bosa-press').css("marginRight") !== "-500px"){
			$('#bbc-logo').fadeOut(1000);
			$('#bosa-press').fadeOut(1000);
				$('#bosa-press')
				  .queue(function (next) { 
				    $('#bosa-press').css({"margin-right": ""}); 
				    next(); 
			});
			$('#bbc-logo').fadeIn(1500);		  
			$('#bosa-press').fadeIn();
		}

		return;

	} else {

		console.log('reset');

		if($(".toggle-menu").is(":visible")){
			$(".toggle-menu").fadeOut();
		}

		if($("#drink-menu").is(":visible")){
			$('#drink-menu').css({"display": "none"}); 
		} else if($("#munchies-menu").is(":visible")){
			$('#munchies-menu').css({"display": "none"}); 
			$("#munchies-button").removeClass("roffbutton");
			$("#drink-button").addClass("offbutton");
		}		

		if($('#bbc-logo-mini').is(':visible')){
			$('#bbc-logo-mini').fadeOut();
		}

		if($('#instafeed').is(":visible")){
			$('#instafeed').fadeOut(1000);
		}

		if($('#bosa-press').is(':visible')){
			$('#bosa-press').fadeOut(1500);
				$('#bosa-press')
				  .queue(function (next) { 
				    $('#bosa-press').css({"margin-right": ""}); 
				    next(); 
			});
			$('#bosa-press').fadeOut();
		}

		$('#bbc-logo').fadeOut(1000);

		$('#bbc-logo')
		  .delay(800)
		  .queue(function (next) { 
		    $(this).css({"margin-right": ""}); 
		    next(); 
		});

		$('#bbc-logo').fadeIn(1500);
	}
}

var scrollDown = function(){
	if($("#nav").hasClass("navScrolled")){
		$("html, body").animate({ scrollTop: 0 }, 700);
	}
}

// reset on refresh
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// sticky nav
var nav = $("#nav");
    scrolleNav = "navScrolled";
    heroImg = $('#hero-img').height() - 95; 

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

// onclick toggles
$('#home-toggle').click(function(){
	reset();
	scrollDown();
    $("html, body").animate({scrollTop:$('#about').offset().top - 40}, 1500);
  
});

// menu
$('#menu-toggle').click(function(){
	scrollDown();
	$('#bbc-logo').fadeOut(1000);
	if($('#instafeed').is(":visible")){
		$('#instafeed').fadeOut(1000);
	}

	if($('#bosa-press').is(':visible')){
		$('#bosa-press').fadeOut(1500);
		$('#bosa-press')
		  .queue(function (next) { 
		    $(bosa-press).css({"margin-right": ""}); 
		    next(); 
		});
		$('#bosa-press').fadeIn();
	}
	$('#bbc-logo-mini').delay(1000).fadeIn(function(){
		$('.toggle-menu').fadeIn(function(){
			$('#drink-menu').fadeIn(2000);
		});
	});
});


// menu buttons 
$("#munchies-button").click(function(){
	$("#munchies-button").addClass("offbutton");
	$("#drink-menu").fadeOut(function(){
		$("#munchies-menu").fadeIn(1500,function(){
			$("#drink-button").removeClass("offbutton");
		});
	});
});

$("#drink-button").click(function(){
	$("#drink-button").addClass("offbutton");
	$("#munchies-menu").fadeOut(function(){
		$("#drink-menu").fadeIn(1000,function(){
			$("#munchies-button").removeClass("offbutton");		
		});
	});
});

// instafeed
$('#gallery-toggle').click(function(){
	reset();
	scrollDown();

	$('#bbc-logo').fadeOut(1000, function(){
		$('#instafeed').fadeIn(1000);
		// $('#bbc-logo').fadeOut();
	});
});

// press
$('#press-toggle').click(function(){
	reset();
	scrollDown();


	$("#bosa-press").fadeIn(2000
	// 	, function(){
	// 	$("#bosa-press").animate({"margin-right": '+=725'}, 2000);
	// }
	);
});

// instafeed.js
var userFeed = new Instafeed({
    get: 'user',
    userId: '5015620322',
    clientId: '1f044d7ba0df46ceb8d8a379f7ce4955',
    accessToken: '5015620322.1f044d7.8b802798eb8545f08e0cf73aa36fd37d',
    resolution: 'standard_resolution',
    template: '<a class="animation" href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 100,
    links: false
});

userFeed.run();

