var Home = function () {

    this.numberOfGuys = 3;
    this.opened = false;
    this.selected = false;

    this.action = function () {
        this.opened = !this.opened;
    };

    this.reset = function () {
        this.opened = false;
        this.selected = false;
    };

};
