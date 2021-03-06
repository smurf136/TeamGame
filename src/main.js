import 'phaser';
import GameScene from './scenes/GameScene';
// import sky from 'assets/sky.png';
const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 400,
    height: 240,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene
    ]
};

const game = new Phaser.Game(config);

// function preload() {
//     this.load.image('sky','assets/sky.png');
// }

// function create() {
//     this.add.image(300, 200, 'sky')
// }