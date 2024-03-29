function setup() {
  createCanvas(1900, 940, WEBGL);
}

function draw() {
  background(0);

  fill("yellow");
  sphere(200);

  push();
  fill("blue");
  translate(500, 0, 0);
  sphere(50);
  pop();

  push();
  fill("red");
  translate(-300, 0, 0);
  sphere(50);
  pop();
}
