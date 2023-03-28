class Pepe extends MovableObject {
  x = 20;
  y = 130;
  height = 300;
  width = 150;
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  world; // damit kann der Charakter auf die Variablen der World zugreifen
  speed = 10;

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {

    setInterval(()=> {
        if (this.world.keyboard.RIGHT) {
            this.x += this.speed;
            this.otherDirection = false;}
        if (this.world.keyboard.LEFT) {
            this.x -= this.speed;
            this.otherDirection = true;}
        this.world.camera_x = -this.x;
}, 1000 / 60)


    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        // this.x += this.speed;
        // WALK animation
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 1500/60);
  }

  jump() {}
}