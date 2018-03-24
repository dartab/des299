
var database;

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

var s = function(p) {
  // Get input from user
  var nameInput;
  var symptomInput;

  // Keep list of DOM elements for clearing later when reloading
  var listItems = [];


p.setup = function() {
  // Input fields
  nameInput = p.select('#name');
  symptomInput = p.select('#symptom');

  // Submit button
  var submit = p.select('#submit');
  submit.mousePressed(p.sendToFirebase);

  // Start loading the data
  p.loadFirebase();
}

p.loadFirebase = function() {
  var ref = database.ref("names");
  ref.on("value", p.gotData, errData);
}

p.errData = function (error){
  console.log("Something went wrong.");
  console.log(error);
}

// The data comes back as an object
p.gotData = function(data) {
  var names = data.val();

  // Grab all the keys to iterate over the object
  var keys = Object.keys(names);

  // clear previous HTML list
  p.clearList();

  // Make an HTML list
  var list = p.createElement('ol');
  list.parent('data');

  // Loop through array
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var name = names[key];
    var li = p.createElement('li', name.name + ': ' + name.symptom);
    li.parent(list);
    listItems.push(li);
  }
}

// Clear everything
p.clearList = function() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].remove();
  }
}

// This is a function for sending data
p.sendToFirebase = function() {
  var names = database.ref('names');

  // Make an object with data in it
  var data = {
    name: nameInput.value(),
    symptom: symptomInput.value()
  }

  var name = names.push(data, finished);
  console.log("Firebase generated key: " + name.key);

  // Reload the data for the page
  p.finished = function(err) {
    if (err) {
      console.log("ooops, something went wrong.");
      console.log(err);
    } else {
      console.log('Data saved successfully');
    }
  }
}

var myp5 = new p5(s, 'data');
// new p5(t, 'canvascontainer');
