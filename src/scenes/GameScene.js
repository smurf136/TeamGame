let platforms;
let player;
let cursors;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene"
        });
    }
    preload() {
        this.load.image("sky", "../../assets/sky.png");
        this.load.image("ground", "../../assets/platform.png");
        this.load.image("log", "../../assets/log.png");
        this.load.image("bomb", "../../assests");
        this.load.spritesheet("beaver", "../../assets/beaver-Sheet.png", {
            frameWidth: 68,
            frameHeight: 68
        });
    }

    create() {
        this.add.image(400, 300, "sky");
        platforms = this.physics.add.staticGroup();

        platforms
            .create(400, 568, "ground")
            .setScale(2)
            .refreshBody();

        platforms.create(600, 400, "ground");
        platforms.create(50, 250, "ground");
        platforms.create(750, 220, "ground");

        player = this.physics.add.sprite(100, 300, "beaver");

        player.setBounce(0.2);
        //for collider
        player.setCollideWorldBounds(true);
        player.body.setGravityY(100);

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("beaver", {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "down",
            frames: [{ key: "beaver", frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("beaver", {
                start: 5,
                end: 8
            }),
            frameRate: 10,
            repeat: 1
        });
        // this.anims.create({
        //     key: 'walk',
        //     frames: this.anims.generateFrameNames('player', { prefix: 'p1_walk', start: 1, end: 11, zeroPad: 2 }),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // for setting object not crash with each
        this.physics.add.collider(player, platforms);
        const width = this.scene.scene.physics.world.bounds.width;
        const height = this.scene.scene.physics.world.bounds.height;
        const x = width * 0.5;
        const y = height * 0.5;
        
        cursors = this.input.keyboard.createCursorKeys();
        // this.add.image(0, 0, 'bomb').setOrigin(0,0)
    }

    update() {
        if (cursors.left.isDown) {
            // if the left arrow key is down
            player.setVelocityX(-160); // move left
            player.anims.play('left', true);
            console.log("left");
            return 0;
        }
        if (cursors.right.isDown) {
            // if the right arrow key is down
            player.setVelocityX(160); // move right
            player.anims.play('right', true);
            console.log("right")
            return 0;
        }
        if (cursors.up.isDown) {
            player.setVelocityX(0);
            player.anims.play('down',true);
            console.log("down")
            return 0;
         }
        
        // if (cursors.up.isDown && player.body.touching.down) {
        //     player.setVelocityY(-330);
        // }
        // if ((cursors.space.isDown || cursors.up.isDown) && player.body.onFloor())
        // {
        //     player.body.setVelocityY(-500); // jump up
        // }
    }
}

export default GameScene;
