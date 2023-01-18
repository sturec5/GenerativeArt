//generates random stuff
var xcc;
var ycc;
function setup() {
  createCanvas(600, 600);
  noFill();
  xcc = random(width / 10, width / 3);
  ycc = random(width / 10, width / 3);
}

function draw() {
  background(1, 22, 39);
  strokeWeight(2);

  for (let i = 0; i < 360; i++) {
    let x1 = width / 2 + cos(i) * xcc;
    let y1 = height / 2 + sin(i) * xcc;
    let x2 = width / 2 + cos(i + 180) * ycc;
    let y2 = height / 2 + sin(i + 180) * ycc;

    let c = i % 4;
    if (c == 0) {
      stroke(253, 255, 252);
    } else if (c == 1) {
      stroke(46, 196, 182);
    } else if (c == 2) {
      stroke(231, 29, 54);
    } else {
      stroke(255, 159, 28);
    }

    line(x1, y1, x2, y2);
  }
}
