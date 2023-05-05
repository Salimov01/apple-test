$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	$('.background').css('top', -(scrolled * 0.2) + 'px');
});
$(document).ready(function() {
	$('.background').mousemove(function(e) {
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var bgX = ((mouseX / windowWidth) * 100) - 50;
		var bgY = ((mouseY / windowHeight) * 100) - 50;
		$('.background').css('background-position', bgX + '% ' + bgY + '%');
		$('.mouse-tracker').css('transform', 'translate(' + mouseX + 'px, ' + mouseY + 'px)');
		$('.mouse').css('opacity', 1);
	});
	$('.background').mouseleave(function() {
		$('.mouse').css('opacity', 0);
	});
});
