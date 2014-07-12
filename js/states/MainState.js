var mainState = function (game) {

    const BOARD_TOP = 90;
    const PADDING = 4;

    var board = null;
    var homesLeft = [];
    var homesRight = [];

    this.preload = function () {
        game.load.image('board-tile', 'images/board/tile.png');
        game.load.image('board-hole', 'images/board/hole.png');

        game.load.image('home-door-open', 'images/home/door-open.png');
        game.load.image('home-door-closed', 'images/home/door-closed.png');
        game.load.image('home-door-selected', 'images/home/door-selected.png');
        game.load.image('home-lamp-on', 'images/home/lamp-on.png');
        game.load.image('home-lamp-off', 'images/home/lamp-off.png');
    };

    this.create = function () {
        board = new Board(game, 116, BOARD_TOP, PADDING);
        for (var i = 0; i < 5; i++) {
            homesLeft.push(new Home(game, 20, BOARD_TOP + i * (64 + PADDING), false));
            homesRight.push(new Home(game, 616, BOARD_TOP + i * (64 + PADDING), true));
        }
    };

    this.update = function () {

    };
};
