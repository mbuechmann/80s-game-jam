var Player = function () {

    var active = false;

    var currentSelection = 0;

    this.selectables = [];
    this.homes = [];

    this.lamp = new Lamp();
    this.selectables.push(this.lamp);

    for (var i = 0; i < 5; i++) {
        h = new Home();
        this.selectables.push(h);
        this.homes.push(h);
    }
    var selectables = this.selectables;

    var setSelection = function (index) {
        for (var i = 0; i < 6; i++) {
            selectables[i].selected = false;
        }
        selectables[index].selected = true;
    };

    this.__defineSetter__('active', function (value) {
        active = value;
        for (var i = 0; i < 5; i++) {
            this.selectables[i].selected = false;
        }
        this.lamp.selected = active;
    });

    this.__defineGetter__('active', function () {
        return active;
    });

    this.up = function () {
        currentSelection -= 1;
        currentSelection = Math.max(0, currentSelection);
        setSelection(currentSelection);
    };

    this.down = function () {
        currentSelection += 1;
        currentSelection = Math.min(5, currentSelection);
        setSelection(currentSelection);
    };

    this.left = function () {
    };

    this.right = function () {
    };

    this.action = function () {
        selectables[currentSelection].action();
    };
};
