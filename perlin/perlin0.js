let inc = 0.01;
let start = 0;
let zoff = 0;

class Shape {
  constructor() {
    this.start = 0;
    this.zoff = 0;
  }

  update() {
    this.start += inc;
    this.zoff += inc;
  }

  display() {
    beginShape();
    let xoff = this.start;
    for (let x = 0; x <= width; x += 10) {
      let y = noise(xoff, this.zoff) * height;
      stroke(253, 255, 252);
      vertex(x, y);
      xoff += inc;
    }
    endShape();
  }
}

let shape;

function setup() {
  createCanvas(400, 400);
  shape = new Shape();
  noFill();
}

function draw() {
  background(1, 22, 39, 20);
  shape.update();
  shape.display();
}
