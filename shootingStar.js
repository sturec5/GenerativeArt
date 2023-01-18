const canvasWidth = 900;
const canvasHeight = 600;

let shootingStar;
let stars = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);

  shootingStar = new ShootingStar();

  // array of stars
  for (let i = 0; i < 50; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);

  shootingStar.draw();
  shootingStar.update();

  for (let i = 0; i < stars.length; i++) {
    stars[i].draw();
    stars[i].update();
  }
}

class ShootingStar {
  constructor() {
    this.x = 0;
    this.y = random(0, canvasHeight);
    this.vx = random(10, 20);
    this.vy = random(-2, 2);
    this.size = random(4, 8);
    this.alpha = 255;
    this.fadeAmount = random(0.03, 0.08);
  }

  draw() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.fadeAmount;

    if (this.x > canvasWidth) {
      this.x = 0;
      this.y = random(0, canvasHeight);
      this.vx = random(10, 20);
      this.vy = random(-2, 2);
      this.size = random(4, 8);
      this.alpha = 255;
      this.fadeAmount = random(0.03, 0.08);
    }
  }
}

class Star {
  constructor() {
    this.x = random(0, canvasWidth);
    this.y = random(0, canvasHeight);
    this.size = random(1, 3);
    this.speed = random(1, 3);
  }

  draw() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.x -= this.speed;

    if (this.x < 0) {
      this.x = canvasWidth;
      this.y = random(0, canvasHeight);
      this.size = random(1, 3);
      this.speed = random(1, 3);
    }
  }
}
