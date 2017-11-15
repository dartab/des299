// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");



var myPix = new Array("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png");

  function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
  }

// onclick = choosePic1;

  function choosePic1() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture1").src = myPix[randomNum];
  }
//
// onclick = choosePic2;

  function choosePic2() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture2").src = myPix[randomNum];
  }

function startOver(){
    document.getElementById("defaultImg").src="images/default.png";
}


  // function choosePic2() {
  //   var randomNum = Math.floor(Math.random() * myPix.length);
  //   document.getElementById("preentCard").src = myPix[randomNum];
  // }
  //
  // function choosePic3() {
  //   var randomNum = Math.floor(Math.random() * myPix.length)
  //   document.getElementById("futureCard").src = myPix[randomNum];
  // }


  //love this!
  //  window.addEventListener("click", getNewPic);
  //
  //   function getNewPic() {
  //     console.log("new pic");
  //     //create a random number between 0 and length of treeChico array
  //     //Math.floor truncates the decimal of the number
  //     var myRandom = Math.floor(Math.random() * imgs.length);
  //     console.log(preload[myRandom]);

});
