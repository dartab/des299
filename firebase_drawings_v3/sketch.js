// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/RUSvMxxm_Jo

var database;

var drawing = [];
var currentPath = [];
var isDrawing = false;

function setup(){
    var config = {
      apiKey: "AIzaSyAiTnVJ8-WOMf3RXemEAW7eS_zjpwCYWmM",
      authDomain: "my-project-2d7e4.firebaseapp.com",
      databaseURL: "https://my-project-2d7e4.firebaseio.com",
      projectId: "my-project-2d7e4",
      storageBucket: "my-project-2d7e4.appspot.com",
      messagingSenderId: "339604456383"
    };
    firebase.initializeApp(config);
}

var s = function(p) {
  console.log("s");

  p.setup = function() {
    canvas = p.createCanvas(200, 200);

    canvas.mousePressed(p.startPath);
    canvas.parent('canvascontainer');
    canvas.mouseReleased(endPath);

    var saveButton = p.select('#saveButton');
    saveButton.mousePressed(p.saveDrawing);

    var clearButton = p.select('#clearButton');
    clearButton.mousePressed(clearDrawing);


    var params = p.getURLParams();
    console.log(params);
    if (params.id) {
      console.log(params.id);
      p.showDrawing(params.id);
    }

    p.database = firebase.database();
    var ref = p.database.ref('drawings');
    ref.on('value', p.gotData, errData);
  }

  p.draw = function() {
    p.background(0);

    if (isDrawing) {
      var point = {
        x: p.mouseX,
        y: p.mouseY
      }
      currentPath.push(point);
    }

    p.stroke(255);
    p.strokeWeight(4);
    p.noFill();
    for (var i = 0; i < drawing.length; i++) {
      var path = drawing[i];
      p.beginShape();
      for (var j = 0; j < path.length; j++) {
        p.vertex(path[j].x, path[j].y)
      }
      p.endShape();
    }
  }


  p.startPath = function() {
    isDrawing = true;
    currentPath = [];
    drawing.push(currentPath);
  }

  function endPath() {
    isDrawing = false;
  }


  p.saveDrawing = function() {
    var ref = p.database.ref('drawings');
    var data = {
      name: "Dan",
      drawing: drawing
    }
    var result = ref.push(data, dataSent);
    console.log(result.key);

    function dataSent(err, status) {
      console.log(status);
    }
  }

  p.gotData = function(data) {

    // clear the listing
    var elts = p.selectAll('.listing');
    for (var i = 0; i < elts.length; i++) {
      elts[i].remove();
    }

    var drawings = data.val();
    var keys = Object.keys(drawings);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      //console.log(key);
      var li = p.createElement('li', '');
      li.class('listing');
      var ahref = p.createA('#', key);
      ahref.mousePressed(p.showDrawing);
      ahref.parent(li);

      var perma = p.createA('?id=' + key, 'permalink');
      perma.parent(li);
      perma.style('padding', '4px');

      li.parent('drawinglist');
    }
  }

  function errData(err) {
    console.log(err);
  }

  p.showDrawing = function(key) {
    //console.log(arguments);
    if (key instanceof MouseEvent) {
      key = this.html();
    }

    var ref = p.database.ref('drawings/' + key);
    ref.once('value', oneDrawing, errData);

    function oneDrawing(data) {
      var dbdrawing = data.val();
      drawing = dbdrawing.drawing;
      //console.log(drawing);
    }

  }

  function clearDrawing() {
    drawing = [];
  }

};

var myp5 = new p5(s, 'canvascontainer');
var myp5_2 = new p5(s, 'canvascontainer');
