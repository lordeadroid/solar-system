const sun = () => {
  push();
  fill("yellow");
  rotateZ(radians(6));
  rotateY(frameCount * 100);
  sphere(200);
  pop();
};

function setup() {
  createCanvas(1900, 940, WEBGL);
  background("black");
}

function draw() {
  sun();

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
