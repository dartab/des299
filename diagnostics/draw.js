// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/RUSvMxxm_Jo

var database;

var config = {
  apiKey: "AIzaSyAiTnVJ8-WOMf3RXemEAW7eS_zjpwCYWmM",
  authDomain: "my-project-2d7e4.firebaseapp.com",
  databaseURL: "https://my-project-2d7e4.firebaseio.com",
  projectId: "my-project-2d7e4",
  storageBucket: "my-project-2d7e4.appspot.com",
  messagingSenderId: "339604456383"
};
firebase.initializeApp(config);
database = firebase.database();

// empty canvas in which to draw
var s = function(p) {
  var drawing = [];
  var currentPath = [];
  var isDrawing = false;

  p.setup = function() {
    canvas = p.createCanvas(370, 370);

    canvas.mousePressed(p.startPath);
    canvas.parent('canvascontainer');
    canvas.mouseReleased(endPath);

    var saveButton = p.select('#saveButton');
    saveButton.mousePressed(p.saveDrawing);

    var clearButton = p.select('#clearButton');
    clearButton.mousePressed(clearDrawing);

    // var clearDrawingsButton = p.select('#clearDrawingButton');
    // clearDrawingsButton.mousePressed(clearDrawingList);

    var params = p.getURLParams();
    console.log(params);
    if (params.id) {
      console.log(params.id);
      p.showDrawing(params.id);
    }

    var ref = database.ref('drawings');
    ref.on('value', p.gotData, errData);
  }


//drawing function
  p.draw = function() {
    p.background(0);

    if (isDrawing) {
      var point = {
        x: p.mouseX,
        y: p.mouseY
      }
      currentPath.push(point);
      p.print(currentPath.length, drawing.length, currentPath, drawing);
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
    return false;
  }

  function endPath() {
    isDrawing = false;
  }


// saves drawing into the database
  p.saveDrawing = function() {
    var ref = database.ref('drawings');
    var data = {
      // name: "Dan",
      drawing: drawing
    }
    var result = ref.push(data, dataSent);
    console.log(result.key);

    function dataSent(err, status) {
      console.log(status);
    }
    drawing = [];
  }

//puts drawings into the listing
  p.gotData = function(data) {

    // clear the listing
    // var elts = p.selectAll('.listing');
    // for (var i = 0; i < elts.length; i++) {
    //   elts[i].remove();
    // }

    var drawings = data.val();
    var keys = Object.keys(drawings);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      //console.log(key);

      // commented out the listing

      // var li = p.createElement('li', '');
      // li.class('listing');
      // var ahref = p.createA('#', key);
      // ahref.mousePressed(p.showDrawing);
      // ahref.parent(li);
      //
      // var perma = p.createA('?id=' + key, 'permalink');
      // perma.parent(li);
      // perma.style('padding', '4px');
      //
      // li.parent('drawinglist');
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

    var ref = database.ref('drawings/' + key);
    ref.once('value', oneDrawing, errData);

    function oneDrawing(data) {
      var dbdrawing = data.val();
      // drawing = dbdrawing.drawing;
      var newp5 = new p5(t);
      newp5.setDrawing(dbdrawing.drawing);
      //console.log(drawing);
    }
  }

  function clearDrawing() {
    drawing = [];
  }

  // function clearDrawingList() {
  //   drawinglist.remove();
  // }
};

var t = function(p) {
  var drawing = [];

  p.setup = function() {
    canvas = p.createCanvas(200, 200);
    canvas.parent('canvascontainer');
  }

  p.draw = function() {
    p.background(0);
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

  p.setDrawing = function(newDrawing) {
    drawing = newDrawing;
  }
};

var myp5 = new p5(s, 'canvascontainer');
// new p5(t, 'canvascontainer');
