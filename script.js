const gameBoard = (function Gameboard(){
    let board = [
        ['X','',''],
        ['0','X',''],
        ['X','','']
    ];
    
    return {board};
})();

function Player(name) {
    //player here
};

const displayController = (function Display(){
    function render(gameBoard) {
        let container = document.querySelector("#container");
        for(rows of gameBoard.board) {
            for(cell of rows) {
                div = document.createElement("div");
                div.innerHTML = cell;
                container.appendChild(div);
            }
        }
    };

    return {render};
})();

displayController.render(gameBoard);