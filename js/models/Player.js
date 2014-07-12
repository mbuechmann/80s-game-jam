var Player = function () {

    var active = false;

    var currentSelection = -1;

    this.homes = [];
    for (var i = 0; i < 5; i++) {
        this.homes.push(new Home());
    }
    var homes = this.homes;

    var selectHome = function (index) {
        for (var i = 0; i < 5; i++) {
            homes[i].selected = false;
        }
        if (index > -1) {
            homes[index].selected = true;
        }
    };

    this.__defineSetter__('active', function (value) {
        active = value;
        for (var i = 0; i < 5; i++) {
            this.homes[i].selected = false;
        }
    });

    this.__defineGetter__('active', function () {
        return active;
    });

    this.up = function () {
        currentSelection -= 1;
        currentSelection = Math.max(-1, currentSelection);
        selectHome(currentSelection);
    };

    this.down = function () {
        currentSelection += 1;
        currentSelection = Math.min(4, currentSelection);
        selectHome(currentSelection);
    };

    this.left = function () {
    };

    this.right = function () {
    };

    this.action = function () {
    };
};
