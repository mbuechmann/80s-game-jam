var LampView = function (game, x, y) {

    var group = game.add.group();
    group.x = x || 0;
    group.y = y || 0;

    group.create(20, 0, 'player-lamp-on');
    var lampOff = group.create(20, 0, 'player-lamp-off');
    lampOff.visible = false;
    var selection = group.create(20, 0, 'player-lamp-selected');
    selection.visible = false;

};
