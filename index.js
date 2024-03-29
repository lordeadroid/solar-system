const sun = () => {
  push();
  fill("yellow");
  rotateZ(radians(6));
  rotateY(frameCount * 100);
  sphere(200);
  pop();
};

const planet = (color, distanceFromSun) => {
  push();
  fill(color);
  rotateY(frameCount * 0.01);
  translate(distanceFromSun, 0, 0);
  sphere(50);
  pop();
};

function setup() {
  createCanvas(1900, 940, WEBGL);
}

function draw() {
  background("black");

  sun();

  planet("blue", 500);
  planet("red", -300);
}
