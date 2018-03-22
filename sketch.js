let scl = 20;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(50, 100);
}

function draw() {
  //background(255);
  fill(0);
  noStroke();
  ellipse(random(0, width), random(0, height), r/2, r/2);
  noLoop();
}
