var HomeView = function (game, x, y, flipped) {
    var group = game.add.group();
    group.x = x || 0;
    group.y = y || 0;

    if (flipped) {
        group.scale.set(-1, 1);
    }

    group.create(20, 0, 'home-door-open');

    var closedDoor = group.create(20, 0, 'home-door-closed');
    closedDoor.visible = false;

    var selectedDoor = group.create(20, 0, 'home-door-selected');
    selectedDoor.visible = false;

    var lamps = [];
    for (var i = 0; i < 3; i++) {
        group.create(0, i * 24, 'home-lamp-off');
        lamps.push(group.create(0, i * 24, 'home-lamp-on'));
    }
};
