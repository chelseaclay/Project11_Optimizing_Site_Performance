$(document).ready(function(){
  //thumnail image
  var thumbIMG = $(".image > img");
  
  //get larger image when thumbnail is clicked
  $(thumbIMG).click(function() {
    var imagePath = $(this).attr("src");
    var bigIMG = imagePath.replace("img/photos/thumbs/", "img/photos/");
    var $dataInfo = $(this).parent().attr("data-reveal-id"); 
    
    $("#" + $dataInfo).find("img").attr("src", largerSrc); 
  });
});