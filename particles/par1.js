var particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(1, 22, 39);

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    for (var j = i + 1; j < particles.length; j++) {
      var distance = dist(
        particles[i].x,
        particles[i].y,
        particles[j].x,
        particles[j].y
      );
      if (distance < 100) {
        stroke(253, 255, 252);
        line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
      }
    }
  }
}

function Particle() {
  this.x = random(width);
  this.y = random(height);
  this.radius = random(5, 20);
  this.xSpeed = random(-5, 5);
  this.ySpeed = random(-5, 5);

  this.update = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  };

  this.draw = function () {
    fill(46, 196, 182, 100);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  };
}

function mousePressed() {
  particles.push(new Particle());
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    particles.push(new Particle());
  } else if (keyCode === DOWN_ARROW) {
    particles.pop();
  }
}
