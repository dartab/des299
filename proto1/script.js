   // JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    // current id
    var current = document.getElementById('current');

    // hover over current color
    current.addEventListener('mouseover', function() {
        current.style.opacity = 1;
        current.src = 'images/current.png';
    });

    current.addEventListener('mouseout', function() {
        current.style.opacity = 1;
        current.src = 'images/current-bw.png';
    });



    // submit id
    var submit = document.getElementById('submit');

    // hover over ball color
    submit.addEventListener('mouseover', function() {
        submit.style.opacity = 1;
        submit.src = 'images/submit.png';
    });

    submit.addEventListener('mouseout', function() {
        submit.style.opacity = 1;
        submit.src = 'images/submit-bw.png';
    });



    // about id
    var about = document.getElementById('about');

    // hover over about color
    about.addEventListener('mouseover', function() {
        about.style.opacity = 1;
        about.src = 'images/about.png';
    });

    about.addEventListener('mouseout', function() {
        about.style.opacity = 1;
        about.src = 'images/about-bw.png';
    });



    // archive id
    var outside = document.getElementById('archive');

  // hover over archive color
    archive.addEventListener('mouseover', function() {
        archive.style.opacity = 1;
        archive.src = 'images/archive.png';
    });

    archive.addEventListener('mouseout', function() {
        archive.style.opacity = 1;
        archive.src = 'images/archive-bw.png';
    });


    // symptom id
    var picture = document.getElementById('symptom');

  // hover over picture for info box
    symptom.addEventListener('mouseover', function() {
        symptom.style.opacity = 1;
        symptom.src = 'images/symptom.png';
    });

    symptom.addEventListener('mouseout', function() {
        symptom.style.opacity = 1;
        symptom.src = 'images/symptom-bw.png';
    });

});
