var imageSet1 =[];
var imageSet2 =[];
if (window.matchMedia('(max-width: 840px)').matches){
  imageSet1 =["img/md-flysky1.jpg","img/md-flysky3.jpg"];
  imageSet2 =["img/md-flysky2.jpg","img/md-flysky4.jpg"];
}else {
  imageSet1 = ["img/flysky1.jpg", "img/flysky3.jpg"];
  imageSet2 = ["img/flysky2.jpg", "img/flysky4.jpg"];
}
var currentImageSet2 = 0;
var currentImageSet1 = 0;
function changeBackgroundImages() {
    img1Fade();
    setTimeout(img2Fade, 2000);

}

function img1Fade(){

    $('#bImg1').fadeOut('slow', function(){$('#bImg1').css({background: 'url(' + imageSet1[++currentImageSet1] + ') no-repeat'})});
    $('#bImg2').fadeIn('slow');
    if (currentImageSet1 >= imageSet1.length - 1) {

            currentImageSet1 -= imageSet1.length;
        };
}

function img2Fade(){

    $('#bImg2').fadeOut('slow', function(){$('#bImg2').css({background: 'url(' + imageSet2[++currentImageSet2] + ') no-repeat'})});
    $('#bImg1').fadeIn('slow');
    if (currentImageSet2 >= imageSet2.length - 1) {

            currentImageSet2 -= imageSet2.length;
        };
}

$(document).ready(function(){

    setInterval(changeBackgroundImages, 5000);
});
