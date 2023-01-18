let particles = [];
let maxParticles = 100;
let colorPalette = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];
let particleSize = 10;
let particleMinSpeed = 0.5;
let particleMaxSpeed = 2;
let particleDistance = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < maxParticles; i++) {
    let x = random(width);
    let y = random(height);
    let speedX = random(particleMinSpeed, particleMaxSpeed);
    let speedY = random(particleMinSpeed, particleMaxSpeed);
    let color = random(colorPalette);
    let particle = new Particle(x, y, speedX, speedY, color);
    particles.push(particle);
  }
}

function draw() {
  background(1, 22, 39);
  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.move();
    particle.display();
    for (let j = i + 1; j < particles.length; j++) {
      let other = particles[j];
      let distance = dist(particle.x, particle.y, other.x, other.y);
      if (distance < particleDistance) {
        stroke(253, 255, 252, map(distance, 0, particleDistance, 255, 0));
        line(particle.x, particle.y, other.x, other.y);
      }
    }
  }
}

class Particle {
  constructor(x, y, speedX, speedY, color) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, particleSize, particleSize);
  }
}
