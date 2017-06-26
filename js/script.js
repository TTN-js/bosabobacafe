// jQuery check
console.log($);

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
    }, 3500);
});

// logo fade in on ready
$(document).ready(function(){
  $('#bbc-logo').fadeIn(3500);
});

// reset animation
var reset = function(){

	if($(".toggle-menu").is(":visible")){
		$(".toggle-menu").fadeOut(1000);
	}

	if($("#drink-menu").is(":visible")){
		$('#drink-menu').fadeOut(1000);
	} else if($("#munchies-menu").is(":visible")){
		$('#munchies-menu').fadeOut(1000);
		$("#munchies-button").removeClass("roffbutton");
		$("#drink-button").addClass("offbutton");
	}		

	if($('#instafeed').is(":visible")){
		$('#instafeed').fadeOut(1000);
	}

	if($('#bosa-press').is(':visible')){
		$('#bosa-press').fadeOut(1000);
		$('#bbc-logo-press').fadeOut(1000);
	}
	
}

// resize reset
$(window).resize(function() {
	if ($(window).width() < 1000) {

    	if($(".toggle-menu").is(":visible")){
    			$(".toggle-menu").hide();
		}

		if($("#drink-menu").is(":visible")){
			$('#drink-menu').hide();
		} else if($("#munchies-menu").is(":visible")){
			$('#munchies-menu').hide();
			$("#munchies-button").removeClass("roffbutton");
			$("#drink-button").addClass("offbutton");
		}		

		if($('#instafeed').is(":visible")){
			$('#instafeed').hide();
		}

		if($('#bosa-press').is(':visible')){
			$('#bosa-press').hide();
			$('#bbc-logo-press').hide();
		}

		$('#bbc-logo').fadeIn(1000);
	}
});

var scrollDown = function(){
	$("html, body").animate({ scrollTop: 0 }, 1500);
}

// onclick toggles
// home
$('#home-toggle').click(function(){
	reset();
	if ($("#bbc-logo").is(":visible")){
		$('#bbc-logo').fadeOut(1000);
	}

	setTimeout(function() {
	    $('#bbc-logo').fadeIn(2000);
	}, 1000);
	
    $("html, body").animate({scrollTop:$('#about').offset().top}, 1500);
});

// menu
$('#menu-toggle').click(function(){
	scrollDown();

	$('#bbc-logo').fadeOut(1000);

	// instafeed
	if($('#instafeed').is(":visible")){
		$('#instafeed').fadeOut(1000);
	}

	// press
	if($('#bosa-press').is(':visible')){
		$('#bosa-press').fadeOut(1000)
		$('#bbc-logo-press').fadeOut(1000);
	}

	// mini logo
	setTimeout(function() {
	    $('#bbc-logo-mini').delay(1000).fadeIn(function(){
    		$('.toggle-menu').fadeIn(function(){
    			$('#drink-menu').fadeIn(2000);
    		});
    	});
	}, 500);
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



	if($('#bbc-logo').is(":visible")){
		$('#bbc-logo').fadeOut(1000, function(){
			$('#instafeed').fadeIn(1000);
		});
	} else {
		setTimeout(function() {
		    $('#bbc-logo').fadeOut(1000, function(){
			$('#instafeed').fadeIn(1000);
			});
		}, 2000);
	}
});

// press
$('#press-toggle').click(function(){
	reset();
	scrollDown();


	if($('#bbc-logo').is(":visible")){
		$('#bbc-logo').fadeOut(1000);
	}

	setTimeout(function() {
		$("#bosa-press").fadeIn(1000);
	    $('#bbc-logo-press').fadeIn(1000);
	}, 2000);
});

// order online
$('#order-on').click(function(){
	setTimeout(function() {
		location.reload();
	}, 1000);
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
