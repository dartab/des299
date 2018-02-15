// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // psychic variables
    var psychic = document.getElementById('psychic');
    var psychicTip = document.getElementById('psychicTip');

    // ball variables
    var ball = document.getElementById('ball');
    var ballTip = document.getElementById('ballTip');

    // drink variables
    var drink = document.getElementById('drink');
    var drinkTip = document.getElementById('drinkTip');

    // tip timer variable
    var tipTimer;

    // psychic functionality
    psychic.addEventListener('mouseover', function() {
        console.log('mouseover on psychic');
        tipTimer = setTimeout(showPsychicTip, 1000);
    });

    psychic.addEventListener('mouseout', function() {
        console.log('mouseout on psychic');
        clearTimeout(tipTimer);
        psychicTip.style.opacity = 0;
    });

    function showPsychicTip() {
        console.log('showing msg');
        psychicTip.style.opacity = 1;
        psychicTip.style.transition = 'all .5s';
    }

    // ball functionality
    ball.addEventListener('mouseover', function() {
        console.log('mouseover on ball');
        tipTimer = setTimeout(showBallTip, 1000);
    });

    ball.addEventListener('mouseout', function() {
        console.log('mouseout on ball');
        clearTimeout(tipTimer);
        ballTip.style.opacity = 0;
    });

    ball.addEventListener('click', function() {
        starAnim = requestAnimationFrame(moveStar);
    });

    function showBallTip() {
        console.log('showing msg');
        ballTip.style.opacity = 1;
        ballTip.style.transition = 'all .5s';
    }

    // drink functionality
    drink.addEventListener('mouseover', function() {
        console.log('mouseover on drink');
        tipTimer = setTimeout(showDrinkTip, 1000);
    });

    drink.addEventListener('mouseout', function() {
        console.log('mouseout on drink');
        clearTimeout(tipTimer);
        drinkTip.style.opacity = 0;
    });

    function showDrinkTip() {
        console.log('showing msg');
        drinkTip.style.opacity = 1;
        drinkTip.style.opacity = 'all .5s';
    }

    /// star animation variables
    var stopAnimation = document.getElementById('stopAnimation');
    var star = document.getElementById('star');
    var starAnim;

    stopAnimation.addEventListener('click', function() {
        console.log('stop clicked');
        cancelAnimationFrame(starAnim);
    });

    function moveStar() {
        console.log('moving star');


        var w = 60;
        var h = 60;
        //console.log ('w: ' + w + ', h: ' + h);

        var newLeft = (Math.floor(Math.random() * w)) + 'px';
        var newTop = (Math.floor(Math.random() * h)) + 'px';
        //console.log ('newLeft: ' + newLeft);

        star.style.left = newLeft;
        star.style.top = newTop;

        // recursive call back to the same function
        starAnim = requestAnimationFrame(moveStar);
    }


// drink timer
var alertTimer;

drink.addEventListener ('click', function(){
  console.log('clicked start');
  alertTimer = setTimeout(showAlert, 1000);
});

function showAlert(){
  alert('Congratulations! Your chakras have been cleansed.');
}

});
