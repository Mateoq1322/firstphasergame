/*global Phaser*/


var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}


game_state.main = function() {};
game_state.main.prototype = {


    preload: function() {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);



    },


    create: function() {
        game.add.sprite(0, 0, 'star');
        game.add.sprite(0, 0, 'sky');
        
        this.platforms = game.add.group();
        this.platforms.enablebody = true;
        
        var ground = this.platforms.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(2, 2)
        ground.body.immovable = true;
        var ledge = this.platforms.create(200, 300, 'ground');
        ledge.body.immovable = true;
        game.physics.startsystem(phaser.physics.ARCADE);
        


    },


    update: function() {


    },


}
game.state.add('main', game_state.main);
game.state.start('main');
