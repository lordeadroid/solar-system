const sun = () => {
  push();
  fill("yellow");
  rotateZ(radians(6));
  rotateY(frameCount * 100);
  sphere(75);
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
