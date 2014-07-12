var mainState = function (game) {

    var game = game;
    var helloSprite = null;

    this.preload = function () {
        game.load.image('awesome', 'images/awesome.png');
    };

    this.create = function () {
        helloSprite = game.add.sprite(100, 100, 'awesome');
    };

    this.update = function () {

    };
};
