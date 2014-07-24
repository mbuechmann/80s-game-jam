var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');

game.state.add('main', new MainState(game));
game.state.start('main');
