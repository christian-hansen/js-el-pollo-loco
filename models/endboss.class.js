class Endboss extends MovableObject {
    y = 135;
    height = 300;
    width = 280;
    offset = {
        top: 50,
        bottom: 65,
        left: 30,
        right: 20
    };

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    constructor() {
        super().loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 2460;
        this.speed = 10;
    
        this.animate();
        }

        animate() {
            let i;
            let hadFirstContact = false;

            setInterval(() => {
                if (world.character.x > this.x - 400 && !hadFirstContact) {
                    i = 0;
                    hadFirstContact = true;}
                if (i < 20) {
                    this.moveLeft();
                    this.playAnimation(this.IMAGES_WALKING) 
                } else {this.playAnimation(this.IMAGES_ALERT);}

                // //TODO if Abstand kleiner als XYZ dann ALERT 
                // if (i > 10) {this.playAnimation(this.IMAGES_ALERT);}
                // //TODO if Abstand kleiner als XYZ dann ATTACK 
                // if (i > 20) {this.playAnimation(this.IMAGES_ATTACK);}
                // //TODO if gotHit dann HURT 
                // if (i > 30) {this.playAnimation(this.IMAGES_HURT);}    
                // //TODO if energy 0 dann DEAD       
                // if (i > 40) {this.playAnimation(this.IMAGES_DEAD);}   

                i++;
                // console.log(i);
            }, 200);


          }
}