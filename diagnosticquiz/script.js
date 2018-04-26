// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  //capture the submit event
  document.diagnostics.onsubmit = processForm;

  //onreset
  document.diagnostics.onreset = clearForm;

  //define process function
  function processForm() {

    document.getElementById("message").style.display = 'block';

    //store q1 in a variable called q1
    var q1 = document.diagnostics.q1.value;
    // alert('Hi ' + userName);

    //store q2 in a variable called q2
    var q2 = document.diagnostics.q2.value;

    //store q2 in a variable called q2
    var q3 = document.diagnostics.q3.value;


    // capture the my Msg element
    var myMsg = document.getElementById('myMsg');
    var message = document.getElementById("message");

    // if they answer all the questions correctly
    if (q1 == "A" && q2 == "C" && q3 == "C") {
      myMsg.innerHTML = "Good job! You passed Respecting Women & Femmes 101. Please consult other resources to apply this to your life!";
      message.style.backgroundColor = "rgba(82, 135, 77, 0.7)";
      message.style.textShadow = "2px 2px #3b6338";

      // if they answer all the worst possible answers
    } else if (q1 == "C" && q2 == "A" && q3 == "A") {
      myMsg.innerHTML = "You are just straight up awful, and probably a troll. Please begin improving your life by starting therapy and repairing your relationship with your mother.";
      message.style.backgroundColor = "rgba(181, 78, 33, 0.7)";
      message.style.textShadow = "2px 2px #7f3819";


      // if they answer another combination
    } else {
      myMsg.innerHTML = "You are an ordinary misogynist! There are an awful lot of you out there. Work on making good on your pretenses and don’t take credit for being hip when you’re really just an asshole!"
      message.style.backgroundColor = "rgba(140, 109, 23, 0.7)";
      message.style.textShadow = "2px 2px #604b0f";
    }

    //display as block element
    myMsg.style.display = 'block';

    //prevent page from reloading
    return false;
  }

  function clearForm() {
    console.log('clearing form');
    myMsg.style.display = 'none';
    document.getElementById("message").style.display = 'none';

  }



});
