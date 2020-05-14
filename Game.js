let vel;
let gs=20;
let tc=20;


function setup() {
  frameRate(10);
  createCanvas(gs*tc, gs*tc);
  apple = new Apple(gs);
  snake = new Snake(width/2,height/2, gs, apple);
}

function draw() {
  background(220);
  snake.update();
  snake.show();
  apple.show();
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      snake.vel.set(-1,0);
      break;
    case RIGHT_ARROW:
      snake.vel.set(1,0);
      break;
    case UP_ARROW:
      snake.vel.set(0,-1);
      break;
    case DOWN_ARROW:
      snake.vel.set(0,1);
      break;
  }
}