/**
 * 
 * p5.pattern.js library needed
 * 
 **/

let COLS = createCols(
  "https://coolors.co/eb300f-fe7688-fff566-212121-306e42-0d3b66"
);
let PALETTE;

function setup() {
  const s = min(windowWidth, windowHeight) * 0.9;
  createCanvas(s, s);
  background(240);
  frameRate(0.75);
}

function draw() {
  PALETTE = shuffle(COLS, true);
  background(PALETTE[3]);
  PALETTE = PALETTE.slice(0, 3);

  rectMode(CENTER);

  typo(
    width / 2 - width / 3.2,
    height / 2,
    width / 4,
    (height / 4 / 2) * 7,
    true
  );
  typo(width * 0.49, height / 2, width / 4, (height / 4 / 2) * 7, false);
  typo(
    width / 2 + width / 3.2,
    height / 2,
    width / 4,
    (height / 4 / 2) * 7,
    true
  );

  const d = width * 0.08;
  pattern(randPattern(d));
  circlePattern(width * 0.6, height * 0.75, d);
}

function typo(cx, cy, w, h, isp) {
  const structure = isp
    ? [
        [-9, -9],
        [-9, -9],
        [0, 1],
        [-1, -1],
        [-1, 2],
        [-1, -9],
        [2, -9],
      ]
    : [
        [-1, 2],
        [-1, -9],
        [3, 1],
        [-9, -1],
        [0, 2],
        [-9, -9],
        [-9, -9],
      ];

  const xNum = structure[0].length;
  const xSpan = w / xNum;
  const yNum = structure.length;
  const ySpan = h / yNum;

  rectMode(CENTER);
  ellipseMode(CENTER);

  push();
  translate(cx - w / 2, cy - h / 2);

  for (let yi = 0; yi < yNum; yi++) {
    for (let xi = 0; xi < xNum; xi++) {
      const isDraw = structure[yi][xi];
      if (isDraw >= -1) {
        const x = xSpan * (xi + 0.5);
        const y = ySpan * (yi + 0.5);
        patternColors(shuffle(PALETTE));
        pattern(randPattern(xSpan));
        patternAngle((int(random(4)) * PI) / 4);
        push();
        translate(x, y);
        if (isDraw >= 0) {
          rotate(isDraw * HALF_PI);
          const rn = random();
          if (rn > 0.66) rectPattern(0, 0, xSpan, ySpan, xSpan, 0, 0, 0);
          else if (rn > 0.33)
            arcPattern(
              xSpan / 2,
              ySpan / 2,
              xSpan * 2,
              ySpan * 2,
              PI,
              (TAU / 4) * 3
            );
          else
            trianglePattern(
              xSpan / 2,
              ySpan / 2,
              -xSpan / 2,
              ySpan / 2,
              xSpan / 2,
              -ySpan / 2
            );
        } else {
          rectPattern(0, 0, xSpan, ySpan);
        }
        pop();
      }
    }
  }
  pop();
}

function randPattern(t) {
  const ptArr = [
    PTN.noise(0.5),
    PTN.noiseGrad(0.4),
    PTN.stripe(t / int(random(6, 12))),
    PTN.stripeCircle(t / int(random(6, 12))),
    PTN.stripePolygon(int(random(3, 7)), int(random(6, 12))),
    PTN.stripeRadial(TAU / int(random(6, 30))),
    PTN.wave(t / int(random(1, 3)), t / int(random(10, 20)), t / 5, t / 10),
    PTN.dot(t / 10, (t / 10) * random(0.2, 1)),
    PTN.checked(t / int(random(5, 20)), t / int(random(5, 20))),
    PTN.cross(t / int(random(10, 20)), t / int(random(20, 40))),
    PTN.triangle(t / int(random(5, 20)), t / int(random(5, 20))),
  ];
  return random(ptArr);
}

function createCols(url) {
  let slaIndex = url.lastIndexOf("/");
  let colStr = url.slice(slaIndex + 1);
  let colArr = colStr.split("-");
  for (let i = 0; i < colArr.length; i++) colArr[i] = "#" + colArr[i];
  return colArr;
}
