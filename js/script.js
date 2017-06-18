// jQuery check
console.log($);

// start
$(document).ready(function(){
  $('#bbclogo').fadeIn(3000);
});

// reset animation
var reset = function(){
	var logoMargin = $("#bbclogo").css("marginRight");

	if(logoMargin === "62px" && $("#bbclogo").is(':visible')){

		return;

	} else {

		if($(".togglemenu").is(":visible")){
			$(".togglemenu").fadeOut(function(){
				if($("#drinkmenu").is(":visible")){
					$("#drinkmenu").fadeOut();
				} else {
					if($("#munchiesmenu").is(":visible")){
					$("#munchiesmenu").fadeOut();
					$("#munchiesbutton").removeClass("offbutton");
					$("#drinkbutton").addClass("offbutton");
				}
				}
			});
		}

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
	scrollDown();
    $("html, body").animate({scrollTop:$('#about').offset().top - 40}, 2000);
  
});

$('#menu-toggle').click(function(){
	scrollDown();
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
	$('#bbclogomini').delay(1000).fadeIn(function(){
		$('.togglemenu').fadeIn(function(){
			$('#drinkmenu').fadeIn(2000);
		});
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
		$("#drinkmenu").fadeIn(1500,function(){
			$("#munchiesbutton").removeClass("offbutton");		
		});
	});
});


$('#gallery-toggle').click(function(){
	reset();
	scrollDown();
	$('#bbclogo').animate({"margin-right": '+=850'}, 2000);	
});

$('#press-toggle').click(function(){
	reset();
	scrollDown();
	$('#bbclogo').animate({"margin-right": '+=50'}, 1200, function(){
		$("#bosaPress").animate({"margin-right": '+=700'}, 1300);
	});	
});



    