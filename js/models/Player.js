var Player = function () {

    this.active = false;

    this.currentSelection = 0;

    this.selectables = [];
    this.homes = [];

    this.lamp = new Lamp();
    this.selectables.push(this.lamp);

    for (var i = 0; i < 5; i++) {
        var h = new Home();
        this.selectables.push(h);
        this.homes.push(h);
    }
};

Player.prototype.setSelection = function (index) {
    this.selectables.forEach(function (selectable) {
        selectable.selected = false;
    });
    this.selectables[index].selected = true;
};

Player.prototype.up = function () {
    this.currentSelection -= 1;
    this.currentSelection = Math.max(0, this.currentSelection);
    this.setSelection(this.currentSelection);
};

Player.prototype.down = function () {
    this.currentSelection += 1;
    this.currentSelection = Math.min(5, this.currentSelection);
    this.setSelection(this.currentSelection);
};

Player.prototype.left = function () {
};

Player.prototype.right = function () {
};

Player.prototype.action = function () {
    this.selectables[this.currentSelection].action();
};

Player.prototype.setActive = function (value) {
    this.active = value;
    this.selectables.forEach(function (selectable) {
        selectable.reset();
    });
    this.lamp.selected = value;
    this.currentSelection = 0;
};
