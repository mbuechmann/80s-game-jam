var mainState = {

    preload: function () {
        game.load.image('awesome', 'images/awesome.png');
    },

    create: function () {
        this.helloSprite = game.add.sprite(100, 100, 'awesome');
    },

    update: function () {
    }

};
