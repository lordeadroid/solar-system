function setup() {
  createCanvas(1900, 940, WEBGL);
}

function draw() {
  background(0);

  push();
  fill("yellow");
  rotateZ(radians(6));
  sphere(200);
  pop();

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
