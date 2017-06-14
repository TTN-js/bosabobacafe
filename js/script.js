// jQuery check
console.log($);

var logoMargin = $("#bbclogo").css("marginRight");

console.log(logoMargin);

$(document).ready(function(){
  $('#bbclogo').fadeIn(4000);
});

$('#home-toggle').click(function(){
    $("html, body").animate({scrollTop:$('#about').offset().top}, 2000);
});

$('#menu-toggle').click(function(){
	$('#bbclogo').fadeOut(4000);
	$('#bbclogomini').fadeIn(4000);	
});


$('#gallery-toggle').click(function(){
	if (logoMargin === "62px") {
		console.log('hi');
		$('#bbclogo').animate({"margin-right": '+=750'}, 2000);		
	}
	else if(logoMargin === "812px") {
		console.log('bye');
		$('#bbclogo').animate({"margin-right": '-=750'}, 2000);
	}
});

$('#press-toggle').click(function(){
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
    