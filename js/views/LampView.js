var LampView = function (game, x, y, player) {

    this.player = player;

    var group = game.add.group();
    group.x = x || 0;
    group.y = y || 0;

    group.create(20, 0, 'player-lamp-off');
    this.lampOn = group.create(20, 0, 'player-lamp-on');
    this.lampOn.visible = false;
    this.selection = group.create(20, 0, 'player-lamp-selected');
    this.selection.visible = false;

};

LampView.prototype.update = function () {
    this.lampOn.visible = this.player.active;
    this.selection.visible = this.player.lamp.selected;
};
