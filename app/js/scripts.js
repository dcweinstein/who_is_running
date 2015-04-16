// DOC READY
$(document).ready(function(){
	$(".button-collapse").sideNav();
	//pullInNav();
	$('.parallax').parallax();
});

// animation functions
function pullInNav() {
	$('.parallax-container').hide();
	setTimeout(function() {
		$('#left-section-text').css('left', '-1000px');
		$('.red-line').css('left', '1000px');
		$('#left-section-text').css('background-color', '#fff');
		$('#left-section-text').animate({left:'0px'});
		$('#red-1').animate({left:'0px'});
		setTimeout(function() {
			$('#red-2').animate({left:'0px'});
			setTimeout(function() {
				$('#red-3').animate({left:'0px'});
				setTimeout(function() {
					$('#red-4').animate({left:'0px'});
					setTimeout(function() {
						$('#red-5').animate({left:'0px'});
						setTimeout(function() {
							$('#red-6').animate({left:'0px'});
							setTimeout(function() {
								$('#red-7').animate({left:'0px'});
							}, 100);
						}, 100);
					}, 100);
				}, 100);
			}, 100);
		}, 100);
	}, 100);
}

// change on nav bar click
$('.rep-nav').click(function() {
	$('.nav-wrapper').css('background-color', '#f44336');
	$('.parallax-container').show();
});
$('.dem-nav').click(function() {
	$('.nav-wrapper').css('background-color', '#2979ff');
	$('.parallax-container').show();
});
$('.indi-nav').click(function() {
	$('.nav-wrapper').css('background-color', '#bdbdbd');
	$('.parallax-container').show();
});
$('#logo').click(function() {
	$('.nav-wrapper').css('background-color', '#ee6e73');
	$('.parallax-container').show();
});
