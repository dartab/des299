// Get input from user
var nameInput;
var adjectiveInput;
var database;

function setup() {
  noCanvas();

  var config = {
    apiKey: "AIzaSyAJwwZATX-uf2qVmPp7x3x-rTRDsKAIg64",
    authDomain: "form-55f83.firebaseapp.com",
    databaseURL: "https://form-55f83.firebaseio.com",
    projectId: "form-55f83",
    storageBucket: "form-55f83.appspot.com",
    messagingSenderId: "663915200888"
  };
  firebase.initializeApp(config);
  database = firebase.database();


  var params = getURLParams();
  if (params.id) {
    loadOne(params.id);
  }

  // Input fields
  nameInput = select('#name');
  adjectiveInput = select('#adj');

  // Submit button
  var submit = select('#submit');
  submit.mousePressed(sendFirebase);

}


// This is a function for sending data
function sendFirebase() {
  // Make an object with data in it
  var data = {
    name: nameInput.value(),
    adjective: adjectiveInput.value(),
  }

  var madlibs = database.ref('madlibs');
  var madlib = madlibs.push(data, finished);
  console.log("Firebase generated key: " + madlib.key);

  // Reload the data for the page
  function finished(err) {
    if (err) {
      console.log("ooops, something went wrong.");
      console.log(err);
    } else {
      console.log('Data saved successfully');
      generate(data, madlib.key);
    }
  }

}

function generate(data, key) {
  var txt = '$name$: $adjective$';

  var madlib = txt.replace(/\$(.*?)\$/g, replacer);

  function replacer(match, what) {
    var newtext = data[what];

    if (what === 'Name') {
      newtext = newtext.replace(/^(.)/, capitalize);
      function capitalize(match, firstLetter) {
        return firstLetter.toUpperCase();
      }
    }

    return newtext;
  }

  var par = createDiv(madlib);
  par.parent('madlib');
  par.class('text');

  var id = data.id;
  var a = createA('?id='+key,'permalink');
  a.parent('madlib');
}

function loadOne(id) {
  var ref = database.ref("madlibs/" + id);
  ref.on("value", gotOne, errData);

  function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
  }

  function gotOne(data) {
    generate(data.val(), id);
  }
}
