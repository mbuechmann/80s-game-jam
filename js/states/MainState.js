var mainState = function (game) {

    var game = game;
    var board = null;

    this.preload = function () {
        game.load.image('board-tile', 'images/board/tile.png');
        game.load.image('board-hole', 'images/board/hole.png');
    };

    this.create = function () {
        board = new Board(game, 116, 90);
    };

    this.update = function () {

    };
};
