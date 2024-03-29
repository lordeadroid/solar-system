const planet = ({ distance, speed, color }) => {
  push();
  fill(color);
  rotateY((frameCount / 4000) * speed);
  translate(distance * 120, 0, 0);
  sphere(40);
  pop();
};
