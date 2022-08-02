$(function() {
	setPhoto();
	$(window).scroll(function() {
		setPhoto();
	});
});



console.log(result); 

	
}
function setPhoto () {


	
	$(".photo").each(function(index) {
			$(this).css('border', '0px solid teal');
			$(this).css('filter', 'opacity(.5)');
			var firstPhoto = 1;
			var photoTopCordinates = ($(this).offset().top - $(window).scrollTop());
			if (photoTopCordinates > 0 && photoTopCordinates < 325) {
				
				if(firstPhoto == 1){
					$(this).css('border', '6px solid teal');
				$(this).css('filter', 'opacity(1)');
					var mapImage= $(this).attr("mapImage");
					$("#map").attr("src","images/maps/"+ mapImage);
					firstPhoto = 0;
				}
				

				
				
				
			} 
		});
}