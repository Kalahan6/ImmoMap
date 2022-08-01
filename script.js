
$(function() {

	$(".photo").each(function(index) {
		var photoTopCordinates = ($(this).offset().top - $(window).scrollTop());
		if (photoTopCordinates < -10 || photoTopCordinates > 300) {
			$(this).css('border', '0px solid teal');
			$(this).css('filter', 'opacity(.5)');
		} else {
			$(this).css('border', '6px solid teal');
			$(this).css('filter', 'opacity(1)');

		}
	});

	$(window).scroll(function() {

		$(".photo").each(function(index) {
			var photoTopCordinates = ($(this).offset().top - $(window).scrollTop());
			if (photoTopCordinates < 0 || photoTopCordinates > 300) {
				$(this).css('border', '0px solid teal');
				$(this).css('filter', 'opacity(.5)');
			} else {
				$(this).css('border', '6px solid teal');
				$(this).css('filter', 'opacity(1)');
			}
		});
	});
});