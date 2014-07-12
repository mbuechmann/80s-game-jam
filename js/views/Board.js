var Board = function (game, x, y) {

    const PADDING = 4;
    var tileSize = 64;

    var group = game.add.group();
    group.x = x || 0;
    group.y = y || 0;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 5; j++) {
            if ((i === 1 || i === 4) && (j === 1 || j === 3)) {
                group.create(i * (PADDING + tileSize), j * (PADDING + tileSize), 'board-hole');
            } else {
                group.create(i * (PADDING + tileSize), j * (PADDING + tileSize), 'board-tile');
            }
        }
    }
};
