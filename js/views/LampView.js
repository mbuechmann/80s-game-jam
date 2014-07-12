var LampView = function (game, x, y, player) {

    var group = game.add.group();
    group.x = x || 0;
    group.y = y || 0;

    group.create(20, 0, 'player-lamp-off');
    var lampOn = group.create(20, 0, 'player-lamp-on');
    lampOn.visible = false;
    var selection = group.create(20, 0, 'player-lamp-selected');
    selection.visible = false;

    this.update = function () {
        lampOn.visible = player.active;
        selection.visible = player.lamp.selected;
    };

};
