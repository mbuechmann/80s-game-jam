var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

game.state.add('main', mainState);
game.state.start('main');
