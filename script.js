const gameBoard = (function Gameboard() {
  let board = [["", "", ""], ["", "", ""], ["", "", ""]];

  let sign = "o";
  let moves = 0;

  function isEmpty(row, col) {
    if (board[row][col] == "") {
      return true;
    } else {
      return false;
    }
  }

  function move(row, col) {
      moves++;
    if (isEmpty(row, col)) {
      board[row][col] = sign;
      if (sign == "o") {
        sign = "×";
        return "o";
      } else {
        sign = "o";
        return "×";
      }
    } else {
      return false;
    }
  }

  function checkWinner(row, col, sign) {
      if ((board[row][0] == sign && board[row][1] == sign && board[row][2] == sign) || //ckeck row
      (board[0][col] == sign && board[1][col] == sign && board[2][col] == sign) ||     //check column 
      (board[0][0] == sign && board[1][1] == sign && board[2][2] == sign) ||           //check dioganals 
      (board[0][2] == sign && board[1][1] == sign && board[2][0] == sign)) {
        alert("won!");
    }
    
    if(moves == 9) alert("tie!");
    
  }

  return { board, move, checkWinner };
})();

function Player(name) {
  return { name };
}

const displayController = (function Display() {
  function render(gameBoard) {
    let container = document.querySelector("#container");
    let rowIndex = 0;
    for (let row of gameBoard.board) {
      let colIndex = 0;
      for (let cell of row) {
        div = document.createElement("div");
        div.classList.add("playfield");
        div.dataset.row = rowIndex;
        div.dataset.col = colIndex;
        div.innerHTML = cell;
        container.appendChild(div);
        colIndex++;
      }
      rowIndex++;
    }
  }

  function renderMove(row, col, move) {
    let cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    cell.innerHTML = move;
  }
  return { render, renderMove };
})();

playerX = Player("John");
player0 = Player("Mike");

displayController.render(gameBoard);

let playFields = document.querySelectorAll(".playfield");

playFields.forEach(playfield => {
  playfield.addEventListener("click", function(e) {
    let sign = gameBoard.move(e.target.dataset.row, e.target.dataset.col);
    if (!sign) return;
    displayController.renderMove(
      e.target.dataset.row,
      e.target.dataset.col,
      sign
    );
    gameBoard.checkWinner(e.target.dataset.row, e.target.dataset.col,sign);
  });
});
