var Player = function () {

    this.homes = [];
    for (var i = 0; i < 5; i++) {
        this.homes.push(new Home());
    }
    this.selectedHome = null;

};
