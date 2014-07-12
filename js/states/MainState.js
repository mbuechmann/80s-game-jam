var mainState = function (game) {

    const BOARD_TOP = 110;
    const PADDING = 4;

    var boardView = null;
    var homesViewsLeft = [];
    var homesViewsRight = [];
    var lampViewLeft = null;
    var lampViewRight = null;

    var leftPlayer = new Player();
    var rightPlater = new Player();

    this.preload = function () {
        game.load.image('board-tile', 'images/board/tile.png');
        game.load.image('board-hole', 'images/board/hole.png');

        game.load.image('home-door-open', 'images/home/door-open.png');
        game.load.image('home-door-closed', 'images/home/door-closed.png');
        game.load.image('home-door-selected', 'images/home/door-selected.png');
        game.load.image('home-lamp-on', 'images/home/lamp-on.png');
        game.load.image('home-lamp-off', 'images/home/lamp-off.png');

        game.load.image('player-lamp-on', 'images/player/lamp-on.png');
        game.load.image('player-lamp-off', 'images/player/lamp-off.png');
        game.load.image('player-lamp-selected', 'images/player/lamp-selected.png');
    };

    this.create = function () {
        boardView = new BoardView(game, 116, BOARD_TOP, PADDING);

        for (var i = 0; i < 5; i++) {
            homesViewsLeft.push(new HomeView(game, 20, BOARD_TOP + i * (64 + PADDING), false, leftPlayer.homes[i]));
            homesViewsRight.push(new HomeView(game, 616, BOARD_TOP + i * (64 + PADDING), true, rightPlater.homes[i]));
        }

        lampViewLeft = new LampView(game, 10, 20);
        lampViewRight = new LampView(game, 554, 20);
    };

    this.update = function () {
        for (var i in homesViewsLeft) {
            homesViewsLeft[i].update();
        }
        for (var i in homesViewsRight) {
            homesViewsRight[i].update();
        }
    };
};
