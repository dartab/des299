document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
// JavaScript Document

var img1array = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png"];
var text1array = ["text for img1", "text for img2", "text for img3", "text for img4", "text for img5", "text for img6", "text for img7", "text for img8", "text for img9"];
var i = Math.floor(Math.random() * 3);

  function choosePic() {
    document.getElementById("card1").onClick = img1array[i] + tex1array[i];

    // for (i = 0; i < img1array.length; i++) {
    //   return img1array[i];
    //   return text1array[i];
    }
}

  function choosePic1() {
  }

  function choosePic2() {
  }

function startOver(){
    document.getElementById("defaultImg").onClick="images/default.png";
}

});
