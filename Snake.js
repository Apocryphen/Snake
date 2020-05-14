class Snake {
  constructor(x, y, scl, apple) {
    this.x = x;
    this.y = y;
    this.scl = scl;
    this.trail = [];
    this.tail = 5;
    this.apple = apple;
    this.vel = createVector(0, 0);
  }

  show() {
    fill(0);
    rect(this.x + 1, this.y + 1, this.scl - 2, this.scl - 2);
    for (this.segment of this.trail) {
      rect(this.segment.x + 1, this.segment.y + 1, this.scl - 2, this.scl - 2)
    }
  }

  update() {

    while (this.trail.length > this.tail) {
      this.trail.shift();
    }
    this.trail.push(createVector(this.x, this.y));

    this.x += this.vel.x * this.scl;
    this.y += this.vel.y * this.scl;


    for (this.segment of this.trail) {
      if (this.segment.equals(createVector(this.x, this.y))) {
        this.tail = 5;
        break;
      }
    }

    if (this.x < 0) {
      this.x = width - this.scl
    }
    if (this.x > width - this.scl) {
      this.x = 0
    }
    if (this.y < 0) {
      this.y = height - this.scl
    }
    if (this.y > height - this.scl) {
      this.y = 0
    }

    if (this.x == this.apple.x && this.y == this.apple.y) {
      this.apple.eaten();
      this.tail += 1;
    }
  }
}s