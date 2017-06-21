// jQuery check
console.log($);

// start
$(document).ready(function(){
  $('#bbclogo').fadeIn(3000);
});

// reset animation
var reset = function(){
	var logoMargin = $("#bbclogo").css("marginRight");

	if(logoMargin === "3.875em" && $("#bbclogo").is(':visible')){

		console.log('some reset');

		if($('#bosaPress').css("marginRight") !== "-500px"){
			$('#bbclogo').fadeOut(1000);
			$('#bosaPress').fadeOut(1000);
				$('#bosaPress')
				  .queue(function (next) { 
				    $('#bosaPress').css({"margin-right": ""}); 
				    next(); 
			});
			$('#bbclogo').fadeIn(1500);		  
			$('#bosaPress').fadeIn();
		}

		return;

	} else {

		console.log('reset');

		if($(".togglemenu").is(":visible")){
			$(".togglemenu").fadeOut();
		}

		if($("#drinkmenu").is(":visible")){
			$('#drinkmenu').css({"display": "none"}); 
		} else if($("#munchiesmenu").is(":visible")){
			$('#munchiesmenu').css({"display": "none"}); 
			$("#munchiesbutton").removeClass("roffbutton");
			$("#drinkbutton").addClass("offbutton");
		}		

		if($('#bbclogomini').is(':visible')){
			$('#bbclogomini').fadeOut();
		}

		if($('#instafeed').is(":visible")){
			$('#instafeed').fadeOut(1000);
		}

		if($('#bosaPress').is(':visible')){
			$('#bosaPress').fadeOut(1500);
				$('#bosaPress')
				  .queue(function (next) { 
				    $('#bosaPress').css({"margin-right": ""}); 
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

		$('#bbclogo').fadeIn(1500);
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
    heroImg = $('#heroImg').height() - 95; 

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
       }, 4000);
});

if ($(window).width() < 1095 && $(window).width() > 850){
	$('#menu-toggle').click(function(){
		scrollDown();
		$('#bbclogo').fadeOut(1000);
		if($('#instafeed').is(":visible")){
			$('#instafeed').fadeOut(1000);
		}

		if($('#bosaPress').is(':visible')){
			$('#bosaPress').fadeOut(1500);
			$('#bosaPress')
			  .queue(function (next) { 
			    $(bosaPress).css({"margin-right": ""}); 
			    next(); 
			});
			$('#bosaPress').fadeIn();
		}

		$('.togglemenu').fadeIn(function(){
			$('#drinkmenu').fadeIn(2000);
		});
	});

	// menu buttons 
	$("#munchiesbutton").click(function(){
		$("#munchiesbutton").addClass("offbutton");
		$("#drinkmenu").fadeOut(function(){
			$("#munchiesmenu").fadeIn(1500,function(){
				$("#drinkbutton").removeClass("offbutton");
				
			});
		});
	});

	$("#drinkbutton").click(function(){
		$("#drinkbutton").addClass("offbutton");
		$("#munchiesmenu").fadeOut(function(){
			$("#drinkmenu").fadeIn(1000,function(){
				$("#munchiesbutton").removeClass("offbutton");		
			});
		});
	});

} else if($(window).width() < 850){
	$('#menu-toggle').click(function(){
		scrollDown();
		$('#bbclogo').fadeOut(1000);
		if($('#instafeed').is(":visible")){
			$('#instafeed').fadeOut(1000);
		}

		if($('#bosaPress').is(':visible')){
			$('#bosaPress').fadeOut(1500);
			$('#bosaPress')
			  .queue(function (next) { 
			    $(bosaPress).css({"margin-right": ""}); 
			    next(); 
			});
			$('#bosaPress').fadeIn();
		}
		$('.togglemenu').fadeIn();
	});

	// menu buttons 
	$("#drinkbutton").removeClass("offbutton");

	$("#munchiesbutton").click(function(){
		window.open("images/bbcMunchiesMenu.png");
	})

	$("#drinkbutton").click(function(){
		window.open("images/bbcDrinkMenu.png");
	})

} else {

	$('#menu-toggle').click(function(){
		scrollDown();
		$('#bbclogo').fadeOut(1000);
		if($('#instafeed').is(":visible")){
			$('#instafeed').fadeOut(1000);
		}

		if($('#bosaPress').is(':visible')){
			$('#bosaPress').fadeOut(1500);
			$('#bosaPress')
			  .queue(function (next) { 
			    $(bosaPress).css({"margin-right": ""}); 
			    next(); 
			});
			$('#bosaPress').fadeIn();
		}
		$('#bbclogomini').delay(1000).fadeIn(function(){
			$('.togglemenu').fadeIn(function(){
				$('#drinkmenu').fadeIn(2000);
			});
		});
	});

	$('#gallery-toggle').click(function(){
		reset();
		scrollDown();

		$('#bbclogo').fadeOut(1000, function(){
			$('#instafeed').fadeIn(1000);
			$('#bbclogo').animate({"margin-right": '-=25'})
			$('#bbclogo').fadeIn(1000);
		});
	});

	$('#press-toggle').click(function(){
		reset();
		scrollDown();
		$("#bosaPress").fadeIn(2000, function(){
			$("#bosaPress").animate({"margin-right": '+=725'}, 2000);
		});r
	});

	// menu buttons 
	$("#munchiesbutton").click(function(){
		$("#munchiesbutton").addClass("offbutton");
		$("#drinkmenu").fadeOut(function(){
			$("#munchiesmenu").fadeIn(1500,function(){
				$("#drinkbutton").removeClass("offbutton");
				
			});
		});
	});

	$("#drinkbutton").click(function(){
		$("#drinkbutton").addClass("offbutton");
		$("#munchiesmenu").fadeOut(function(){
			$("#drinkmenu").fadeIn(1000,function(){
				$("#munchiesbutton").removeClass("offbutton");		
			});
		});
	});
}

// onclick toggles
$('#home-toggle').click(function(){
	reset();
	scrollDown();
    $("html, body").animate({scrollTop:$('#about').offset().top - 40}, 1500);
  
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
