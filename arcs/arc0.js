let angle = 0;
let stWeight = 0.1;

function setup() {
    createCanvas(400, 400);
    background(1, 22, 39);
    noFill();
}

function draw() {
    translate(width / 2, height / 2);

    for (let i = 1; i <= 10; i++) {
        let r = i * 20;
        let x = r * cos(angle);
        let y = r * sin(angle);
        strokeWeight(stWeight);
        //stWeight += random(-1, 1);
        stroke(46, 196, 182);
        arc(x, y, r, r, 0, HALF_PI);
        stroke(231, 29, 54);
        arc(x, y, r, r, HALF_PI, PI);
        stroke(255, 159, 28);
        arc(x, y, r, r, PI, PI + HALF_PI);
    }

    angle += 0.01;
}


function mousePressed() {
    let date = new Date();
    saveCanvas("screenshot_" + frameCount + "_" + date.toISOString(), "png");
    frameCount++;
  }