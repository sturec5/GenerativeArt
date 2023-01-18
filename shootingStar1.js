let stars = [];
let speed;

let colorPalette = [
  (1, 22, 39),
  (253, 255, 252),
  (46, 196, 182),
  (231, 29, 54),
  (255, 159, 28),
];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 150; i++) {
    stars[i] = new Star();
  }
  speed = 2;
}

function draw() {
  background(1, 22, 39);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

class Star {
  constructor() {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width / 2);
    this.pz = this.z; 
    this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)]; 
  }

  update() {
    this.z = this.z - speed; 
    if (this.z < 1) {
      this.z = width / 2; // if star has moved too far back, reset position
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
      this.pz = this.z;
      this.color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
    }
  }

  show() {
    fill(this.color); 
    noStroke();

    // star based on its 3D position
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width / 2, 16, 0);
    ellipse(sx, sy, r, r); 
    stroke(this.color); 
    line(sx, sy, this.px, this.py); 
    this.px = sx;
    this.py = sy;
  }
}
