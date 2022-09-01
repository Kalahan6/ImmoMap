$(function() {
  setPhoto();
  $(window).scroll(function() {
     setPhoto();
   });
});



function setPhoto() {
  if (noPhotoSelected == true) {
    if (document.title === "Villa Te Koop - Tuin"){
      $("#map").attr("src", "images/maps/Clear/T.png");
    }
    if (document.title === "Villa Te Koop - Gelijkvloers"){
      $("#map").attr("src", "images/maps/Clear/0.png");
    }
    if (document.title === "Villa Te Koop - 1ste Verdiep"){
      $("#map").attr("src", "images/maps/Clear/1.png");
    }
    if (document.title === "Villa Te Koop - 2de Verdiep"){
      $("#map").attr("src", "images/maps/Clear/2.png");
    }
  }
  var noPhotoSelected = true;
  $(".photo").each(function() {
    $(this).css('border', '0px solid teal');
    $(this).css('filter', 'opacity(.5)');
    var firstPhoto = 1;

    var photoTopCordinates = ($(this).offset().top - $(window).scrollTop());
    if (photoTopCordinates > 0 && photoTopCordinates < (this.height + 30)) {
      noPhotoSelected = false;
      if (firstPhoto == 1) {
        $(this).css('border', '6px solid teal');
        $(this).css('filter', 'opacity(1)');
        var mapImage = $(this).attr("mapImage");
        $("#map").attr("src", "images/maps/" + mapImage);
        firstPhoto = 0;
      } else {
        $(this).css('border', '0px solid teal');
        $(this).css('filter', 'opacity(.5)');
      }

    }
  });
  
}