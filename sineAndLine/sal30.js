let canvasWidth = 800;
let canvasHeight = 600;
let numLines = 100;
let lineLength = 50;
let angle = 0;
let angleSpeed = 0.01;
let colorPalette = [[1, 22, 39], [253, 255, 252], [46, 196, 182], [231, 29, 54], [255, 159, 28]];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  strokeWeight(2);
  strokeCap(ROUND);
  noFill();
}

function draw() {
  background(1, 22, 39, 100);
  
  for (let i = 0; i < numLines; i++) {
    let lineY = map(i, 0, numLines, 0, canvasHeight);
    let lineX = canvasWidth/2 + sin(angle + i * 0.5) * canvasWidth/4;
    let colorIndex = i % colorPalette.length;
    stroke(colorPalette[colorIndex]);
    
    push();
    translate(lineX, lineY);
    rotate(angle + i * 0.1);
    line(-lineLength/2, 0, lineLength/2, 0);
    pop();
  }
  
  angle += angleSpeed;
}

function keyPressed() {
  if (key == ' ') {
    angleSpeed *= -1;
  }
}
