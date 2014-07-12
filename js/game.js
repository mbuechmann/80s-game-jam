var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

game.state.add('main', new mainState(game));
game.state.start('main');
