class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('sky','assets/sky.png');
        this.load.image('star','assets/star.png')
    }

    create() {
        this.add.image(0, 0, 'sky')
        this.add.image(0, 0, 'star').setOrigin(0,0)
    }

    update() {

    }
}

export default GameScene;
