// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;

    //onreset
    document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //store user name in a variable
        var axe = document.f.axe.value;
        // alert('Hi ' + userName);

        //store userColor in a variable called userColor
        var cry = document.f.cry.value;

        //store userColor in a variable called userColor
        var sport = document.f.sport.value;


        //store userColor in a variable called userColor
        var car = document.f.car.value;

        //store userColor in a variable called userColor
        var song = document.f.song.value;


        // capture the my Msg element
        var myMsg = document.getElementById('myMsg');

        console.log(song);

        // calling inner HTML to concentrate a message with username and useroclor
        myMsg.style.display = 'block';

        myMsg.innerHTML = "Have you ever heard of Nietzsche? I liken his work to " + axe + ", which is also the fuel of the uncommonly brilliant Ayn Rand. She knew that feminism is a mere allegory for " + cry + ". Capitalism, on the other hand, is a natural process to weed out underlings that don't understand " + sport + ". Since we are in a post-racial " + car + ", there is no point in dividing the movement for " + song + " on earth.";


        //prevent page from reloading
        return false;

    }

    function clearForm() {
        console.log('clearing form');
        myMsg.style.display = 'none';

    }



});
