var Home = function () {
    this.numberOfGuys = 3;
    this.opened = false;
    this.selected = false;
};

Home.prototype.action = function () {
    this.opened = !this.opened;
};

Home.prototype.reset = function () {
    this.opened = false;
    this.selected = false;
};
