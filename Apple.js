class Apple {

  constructor(scl) {
    this.scl = scl;
    this.x = floor(random(width/this.scl)) * this.scl;
    this.y = floor(random(height/this.scl)) * this.scl;
  }

  show() {
    fill(255,0,0);
    rect(this.x,this.y,this.scl,this.scl);
  }
  eaten(){
    this.x = floor(random(width/this.scl)) * this.scl;
    this.y = floor(random(height/this.scl)) * this.scl;
  }

}