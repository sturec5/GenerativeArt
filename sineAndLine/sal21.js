var canvas;

var numLines = 60;
var lineLength = 50;
var angle = 0;
var lineSpacing = 10;

var palette = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];

function setup() {
  canvas = createCanvas(600, 600);
  background(palette[0]);
  strokeWeight(5);
}

function draw() {
  for (var i = 0; i < numLines; i++) {
    stroke(palette[i % palette.length]);

    var x1 = width / 2 + cos(angle + i) * lineLength;
    var y1 = height / 2 + sin(angle + i) * lineLength;
    var x2 = width / 2 + cos(angle + i + lineSpacing) * lineLength;
    var y2 = height / 2 + sin(angle + i + lineSpacing) * lineLength;
    line(x1, y1, x2, y2);
  }
  angle += 0.1;
}

function mouseMoved() {
  lineLength = map(mouseX, 0, width, 50, 200);
}

function mouseDragged() {
  lineSpacing = map(mouseY, 0, height, 10, 50);
}

function mouseClicked() {
  background(palette[int(random(palette.length))]);
}
