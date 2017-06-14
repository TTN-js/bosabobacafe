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

		$('#bbclogo').fadeOut();

		$('#bbclogo')
		  .delay(800)
		  .queue(function (next) { 
		    $(this).css({"margin-right": ""}); 
		    next(); 
		});

		$('#bbclogo').fadeIn();
	}
}

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
    $("html, body").animate({scrollTop:$('#about').offset().top}, 2000);
  
});

$('#menu-toggle').click(function(){
	$('#bbclogo').fadeOut();
	$('#bbclogomini').delay(1000).fadeIn(2000);
});

$('#gallery-toggle').click(function(){
	reset();
	$('#bbclogo').animate({"margin-right": '+=750'}, 2000);	
});

$('#press-toggle').click(function(){
	reset();
	$('#bbclogo').animate({"margin-right": '+=600'}, 2000);	
});


// google maps callback
function initMap() {
	var uluru = {lat: 36.126054, lng: -115.184570};

	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 14,
	  center: uluru
	});

	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}
    