const gameBoard = (function Gameboard() {
  let board = [["", "", ""], ["", "", ""], ["", "", ""]];
  let sign = "o";
  let moves = 0;

  function reset() {
    board = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  function isEmpty(row, col) {
    if (board[row][col] == "") {
      return true;
    } else {
      return false;
    }
  }

  function checkWinner(row, col, sign) {
    if (
      (board[row][0] == sign &&
        board[row][1] == sign &&
        board[row][2] == sign) || //ckeck row
      (board[0][col] == sign &&
        board[1][col] == sign &&
        board[2][col] == sign) || //check column
      (board[0][0] == sign && board[1][1] == sign && board[2][2] == sign) || //check dioganals
      (board[0][2] == sign && board[1][1] == sign && board[2][0] == sign)
    ) {
      alert("won!");
    }

    if (moves == 9) alert("tie!");
  }

  function move(row, col) {
    moves++;

    if (isEmpty(row, col)) {
      board[row][col] = sign;

      checkWinner(row, col, sign);

      if (sign == "o") {
        sign = "×";
      } else {
        sign = "o";
      }
      return true;
    } else {
      return false;
    }
  }

  return {board, reset, move};
})();

const displayController = (function Display() {
  let container = document.querySelector("#container");

  function render(gameBoard) {
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

  function clear() {
    while (container.hasChildNodes()) {
      container.lastChild.remove();
    }
  }

  function showTypeMenu(){
    document.querySelector("#new-game").style.display = "none";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#game-type").style.display = "flex";
  }
  
  function showOnePlayerMenu(){
    document.querySelector("#game-type").style.display = "none";
    let div = document.querySelector("#player-name-input");
    div.style.display = "flex";
    
    let input1 = document.createElement("input");
    input1.setAttribute("placeholder", "Player X name");
    input1.id = "player-one-name";

    div.appendChild(input1);

    let input2 = document.createElement("input");
    input2.value = "XOXO 3000";
    input2.id = "player-two-name";
    input2.disabled = true;
    playerO.type = "computer";

    div.appendChild(input2);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", "displayController.startNewGame()");
    btn.innerHTML = "Start";
    
    div.appendChild(btn);
  }

  function showTwoPlayersMenu(){
    document.querySelector("#game-type").style.display = "none";
    let div = document.querySelector("#player-name-input");
    div.style.display = "flex";
    
    let input1 = document.createElement("input");
    input1.setAttribute("placeholder", "Player X name");
    input1.id = "player-one-name";

    div.appendChild(input1);

    let input2 = document.createElement("input");
    input2.setAttribute("placeholder", "Player O name");
    input2.id = "player-two-name";

    div.appendChild(input2);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", "displayController.startNewGame()");
    btn.innerHTML = "Start";    

    div.appendChild(btn);
  }
  
  function startNewGame(){
    let header = document.querySelector("h1");

    if(document.querySelector("#player-one-name").value){
      playerX.name = document.querySelector("#player-one-name").value;
    };

    if(document.querySelector("#player-two-name").value){
      playerO.name = document.querySelector("#player-two-name").value;
    };

    header.innerHTML = `${playerX.name} vs ${playerO.name}`;
    header.style.visibility = "visible";

    document.querySelector("#player-name-input").style.display = "none";
    
    container.style.display = "grid";
    displayController.render(gameBoard);
  }

  return {render, clear, showTypeMenu, showOnePlayerMenu, showTwoPlayersMenu, startNewGame};
})();

function Player(name, type) {
  return {name, type};
}

let playerO = Player("John", "human");
let playerX = Player("Glenn","human");

document.querySelector("#container").addEventListener("click", function(e) {
  if (event.target.className === "playfield") { //change to classname
    if (!gameBoard.move(e.target.dataset.row, e.target.dataset.col)) return;
    displayController.clear();
    displayController.render(gameBoard);
  }
});
