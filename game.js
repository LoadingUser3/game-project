var config = {
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    scene: [BootScene, WorldScene, BattleScene, UIScene, DialogScene],
};

var game = new Phaser.Game(config);