var HomeView = function (game, x, y, flipped, home) {

    this.home = home;

    var group = game.add.group();
    group.x = x || 0;
    group.y = y || 0;
    if (flipped) {
        group.scale.set(-1, 1);
    }
    group.create(20, 0, 'home-door-closed');

    this.openDoor = group.create(20, 0, 'home-door-open');
    this.openDoor.visible = false;

    this.selectedDoor = group.create(20, 0, 'home-door-selected');
    this.selectedDoor.visible = false;

    this.lamps = [];
    for (var i = 0; i < 3; i++) {
        group.create(0, i * 24, 'home-lamp-off');
        this.lamps.push(group.create(0, i * 24, 'home-lamp-on'));
    }

};

HomeView.prototype.update = function () {
    this.openDoor.visible = this.home.opened;

    for (var i = 0; i < 3; i++) {
        this.lamps[i].visible = (i + this.home.numberOfGuys) >= 3;
    }

    this.selectedDoor.visible = this.home.selected;
};