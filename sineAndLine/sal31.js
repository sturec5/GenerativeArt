function setup() {
    createCanvas(600, 600);
    background(1, 22, 39);
  }
  function draw() {
    noStroke();
    fill(1, 22, 39);
  
    for (let i = 20; i <= width - 20; i += 40) {
      for (let j = 20; j <= height - 20; j += 40) {
        let size = 20 + 15 * sin(0.3 * frameCount + i + j);
        ellipse(i, j, size, size);
      }
    }
    for (let i = 20; i <= width - 20; i += 40) {
      for (let j = 20; j <= height - 20; j += 40) {
        let x = i + 20 * sin(0.3 * frameCount + i + j);
        let y = j + 20 * cos(0.3 * frameCount + i + j);
        stroke(46, 196, 182);
        strokeWeight(2);
        line(i, j, x, y);
      }
    }
    for (let i = 20; i <= width - 20; i += 40) {
      for (let j = 20; j <= height - 20; j += 40) {
        let x1 = i + 20 * sin(0.3 * frameCount + i + j);
        let y1 = j + 20 * cos(0.3 * frameCount + i + j);
        let x2 = i + 20 * sin(0.3 * frameCount + i + j + 40);
        let y2 = j + 20 * cos(0.3 * frameCount + i + j + 40);
        stroke(231, 29, 54);
        strokeWeight(2);
        line(x1, y1, x2, y2);
      }
    }
  
    for (let i = 20; i <= width - 20; i += 40) {
      for (let j = 20; j <= height - 20; j += 40) {
        let x1 = i + 20 * sin(0.3 * frameCount + i + j);
        let y1 = j + 20 * cos(0.3 * frameCount + i + j);
        let x2 = i + 20 * sin(0.3 * frameCount + i + j + 40);
        let y2 = j + 20 * cos(0.3 * frameCount + i + j + 40);
        stroke(255, 159, 28);
        strokeWeight(2);
        line(i, j, x2, y2);
      }
    }
  }
  