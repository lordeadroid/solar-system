const planet = (color, distanceFromSun) => {
  push();
  fill(color);
  rotateY(frameCount * 0.01);
  translate(distanceFromSun, 0, 0);
  sphere(50);
  pop();
};
