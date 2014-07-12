var HomeView = function (game, x, y, flipped, home) {

    var group = game.add.group();
    group.x = x || 0;
    group.y = y || 0;

    if (flipped) {
        group.scale.set(-1, 1);
    }

    group.create(20, 0, 'home-door-closed');

    var opendDoor = group.create(20, 0, 'home-door-open');
    opendDoor.visible = false;

    var selectedDoor = group.create(20, 0, 'home-door-selected');
    selectedDoor.visible = false;

    var lamps = [];
    for (var i = 0; i < 3; i++) {
        group.create(0, i * 24, 'home-lamp-off');
        lamps.push(group.create(0, i * 24, 'home-lamp-on'));
    }

    this.update = function () {
        opendDoor.visible = home.opened;

        for (var i = 0; i < 3; i++) {
            lamps[i].visible = (i + home.numberOfGuys) >= 3;
        }

        selectedDoor.visible = home.selected;
    };

};
