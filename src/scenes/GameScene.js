class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('sky','assets/sky.png');
        this.load.image('bomb','assets/bomb.png')
    }

    create() {
        this.add.image(400, 300, 'sky')
        this.add.image(0, 0, 'bomb').setOrigin(0,0)
    }

    update() {

    }
}

export default GameScene;
