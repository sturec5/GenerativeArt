let lines = [];
let numLines = 100;
let colors = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < numLines; i++) {
    lines.push(new SineLine(i));
  }
}

function draw() {
  background(1, 22, 39, 20);
  for (let i = 0; i < numLines; i++) {
    lines[i].update();
    lines[i].display();
  }
}

class SineLine {
  constructor(index) {
    this.colorIndex = index % colors.length;
    this.color = colors[this.colorIndex];
    this.x1 = 0;
    this.y1 = map(index, 0, numLines, 0, height);
    this.x2 = width;
    this.y2 = this.y1;
    this.angle1 = 0;
    this.angle2 = PI;
    this.amplitude = map(index, 0, numLines, 20, 100);
    this.frequency = map(index, 0, numLines, 0.01, 0.1);
    this.cx1 = width / 2;
    this.cy1 = this.y1;
    this.cx2 = width / 2;
    this.cy2 = this.y2;
  }

  update() {
    this.angle1 += this.frequency;
    this.angle2 += this.frequency;
    this.y1 = this.cy1 = map(
      sin(this.angle1),
      -1,
      1,
      this.y1 - this.amplitude,
      this.y1 + this.amplitude
    );
    this.y2 = this.cy2 = map(
      sin(this.angle2),
      -1,
      1,
      this.y2 - this.amplitude,
      this.y2 + this.amplitude
    );
    this.cx1 = map(
      sin(this.angle1),
      -1,
      1,
      width / 2 - this.amplitude,
      width / 2 + this.amplitude
    );
    this.cx2 = map(
      sin(this.angle2),
      -1,
      1,
      width / 2 - this.amplitude,
      width / 2 + this.amplitude
    );
  }

  display() {
    stroke(this.color[0], this.color[1], this.color[2], 100);
    noFill();
    bezier(
      this.x1,
      this.y1,
      this.cx1,
      this.cy1,
      this.cx2,
      this.cy2,
      this.x2,
      this.y2
    );
  }
}
