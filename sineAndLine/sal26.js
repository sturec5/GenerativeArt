//move your mouse
function setup() {
    createCanvas(900, 900);
    noFill();
    stroke(253, 255, 252);
    strokeWeight(2);
  }
  
  function draw() {
    background(1, 22, 39);
  
    for (let i = 0; i < width; i += 20) {
      for (let j = 0; j < height; j += 20) {
        let x = i + 10 * cos(frameCount * 0.1 + j * 0.5);
        let y = j + 10 * sin(frameCount * 0.1 + i * 0.5);
        let d = dist(mouseX, mouseY, x, y);
        let r = map(d, 0, 200, 46, 231);
        let g = map(d, 0, 200, 196, 29);
        let b = map(d, 0, 200, 182, 54);
        stroke(r, g, b);
        line(i, j, x, y);
      }
    }
  
    let x1 = width / 2 + 200 * cos(frameCount * 0.05);
    let y1 = height / 2 + 200 * sin(frameCount * 0.05);
    let x2 = width / 2 + 200 * cos(frameCount * 0.05 + PI);
    let y2 = height / 2 + 200 * sin(frameCount * 0.05 + PI);
    strokeWeight(5);
  }
  