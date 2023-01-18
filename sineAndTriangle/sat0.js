let numTriangles; 
let spacing;
let maxLength; 
let t;

function setup() {
  createCanvas(600, 600);
  numTriangles = 20;
  spacing = width / numTriangles;
  maxLength = spacing * 0.8;
  t = 0;
}

function draw() {
  background(1, 22, 39);

  t += 0.01;
  //use other trigonometric and noise
  for (let i = 0; i < numTriangles; i++) {
    for (let j = 0; j < numTriangles; j++) {
      let x = spacing * i + spacing / 2;
      let y = spacing * j + spacing / 2;
      let offset = (sin(t + x * 0.1 + y * 0.1) * maxLength) / 2;

      noStroke();
      fill(253, 255, 252);
      triangle(x, y - offset, x + offset, y + offset, x - offset, y + offset);

      strokeWeight(4);
      stroke(46, 196, 182);
      line(x, y - offset, x + offset, y + offset);
      stroke(231, 29, 54);
      line(x + offset, y + offset, x - offset, y + offset);
      stroke(255, 159, 28);
      line(x - offset, y + offset, x, y - offset);
    }
  }
}
