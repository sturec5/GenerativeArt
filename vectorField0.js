// Thanks to Daniel Shiffman

let time = 0;

function createVectorField(cols, rows) {
  let field = [];
  let xOff = time;
  for (let i = 0; i < cols; i++) {
    field[i] = [];
    let yOff = time;
    for (let j = 0; j < rows; j++) {
      let angle = noise(xOff, yOff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      field[i][j] = v;
      yOff += 0.1;
    }
    xOff += 0.1;
  }
  return field;
}

let field;

function setup() {
  createCanvas(400, 400);
  // vector field with 50 columns and 50 rows
  field = createVectorField(50, 50);
}

function draw() {
  background(255);
  time += 0.01;
  field = createVectorField(50, 50);
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      let x = (i * width) / field.length;
      let y = (j * height) / field[i].length;
      drawVector(field[i][j], x, y, 10);
    }
  }
}

function drawVector(v, x, y, scayl) {
  push();
  let arrowsize = 4;
  translate(x, y);
  stroke(0);
  rotate(v.heading());
  let len = v.mag() * scayl;
  line(0, 0, len, 0);
  line(len, 0, len - arrowsize, +arrowsize / 2);
  line(len, 0, len - arrowsize, -arrowsize / 2);
  pop();
}
