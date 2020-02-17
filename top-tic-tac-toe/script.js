function Player(name, type, sign, lastMove) {
  return { name, type, sign, lastMove };
}

let playerX = Player("Glenn", "human", "×", {row: -1, col: -1});
let playerO = Player("John", "human", "o", {row: -1, col: -1});

const gameBoard = (function Gameboard() {
  let board = [["", "", ""], ["", "", ""], ["", "", ""]];
  let currentPlayer = playerX;
  let moves = 0;

  function clear() {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3;  j++)  {
        board[i][j] = "";
      }
    }

    playerX.name = "Glenn";
    playerX.type = "human";
    playerX.sign = "×";
    playerX.lastMove = {row: 0, col: 0};

    playerO.name = "John";
    playerO.type = "human";
    playerO.sign = "o";
    playerO.lastMove = {row: 0, col: 0};

    currentPlayer = playerX;
    moves = 0;
  }

  function cellIsEmpty(row, col) {
    if (board[row][col] == "") {
      return true;
    } else {
      return false;
    }
  }

  function lineIsFull(line, lineNumber) {
    switch(line){
      case "r":
        for(let i = 0; i<3; i++) {
          if(board[lineNumber][i] == "") return false;
        }
        break;
      case "c":
        for(let i = 0; i<3; i++) {
          if(board[i][lineNumber] == "") return false;
        }
        break;
      case "d":
        if(lineNumber == 1) {
          if((board[0][0] == "") || (board[1][1] == "") || (board[2][2] == "")) return false;
        } else {
          if((board[0][2] == "") || (board[1][1] == "") || (board[2][0] == "")) return false;
        }
        break;
    }
    return true;
  }

  function hasSigns(line, lineNumber, signsNumber, sign) {
    let counter = 0;
    switch(line){
      case "r":
        for(let i = 0; i<3; i++) {
          if(board[lineNumber][i] == sign) counter++;
        }
        if(counter == signsNumber) return true;
        break;
      case "c":
          for(let i = 0; i<3; i++) {
            if(board[i][lineNumber] == sign) counter++;
          }
          if(counter == signsNumber) return true;
          break;
      case "d":
        if(lineNumber == 1) {
          for(let i = 0; i<3; i++) {
            if(board[i][i] == sign) counter++;
          }
          if(counter == signsNumber) return true;
        } else {
          for(let i = 2, j = 0; i >= 0 && j < 3; i--, j++) {
              if(board[i][j] == sign) counter++;
          }
          if(counter == signsNumber) return true;
        }
        break;
    }
    return false;
  }

  function isDiagonal(row, col) {
    if((row == 0 || row == 2) && (col == 0 || col == 2)) {
      return true;
    } else if(col == row) {
      return true;
    }
  }

  function returnEmpty(line, lineNumber) {
    switch(line){
      case "r":
        for(let i = 0; i<3; i++) {
          if(board[lineNumber][i] == "") return {row: lineNumber, col: i};
        }
        break;
      case "c":
        for(let i = 0; i<3; i++) {
          if(board[i][lineNumber] == "") return {row: i, col: lineNumber};
        }
        break;
      case "d":
          if(lineNumber == 1) {
            for(let i = 0; i<3; i++) {
              if(board[i][i] == "") return {row: i, col:i};
            }
          } else {
            for(let i = 2; i>0; i--) {
              for(let j = 0; j<3; j++){
                if(board[i][j] == "") return {row: i, col:j};
              }
            }
          }
          break;
    }
    return false;
  }

  function changeCurrentPlayer() {
    if (currentPlayer == playerX) {
      currentPlayer = playerO;
    } else {
      currentPlayer = playerX;
    }
    moves++;
  }

  function computerRandomMove() {
    //Check corners. If empty - return coordinates
    for (let i = 0; i < 3; i += 2) {
      for (let j = 0; j < 3; j += 2) {
        if (cellIsEmpty(i, j)) {
          return { row: i, col: j };
        }
      }
    }

    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        if(cellIsEmpty(i,j)) {
          return { row: i, col: j };
        }
      }
    }
  }

  function calculateComputerMove() {
    // If the first move and the middle field is empty
    console.log(moves);
    console.log(board[1][1]);
    if (moves == 1 && board[1][1] == "") {
      return { row: 1, col: 1 };
    }

    // If the first move and he middle field is not empty
    if (moves == 1 && board[1][1] == "×") {
      return { row: 2, col: 2 };
    }

    // If the third move and the player played opposite corners
    if (moves == 3 && board[1][1]) {
      if (board[0][0] == "×" && board[2][2] == "×") {
        return { row: 0, col: 1 };
      }
    }

    // Calculate the best move to close the line
    if (!lineIsFull("r",playerO.lastMove.row) && hasSigns("r", playerO.lastMove.row, 2, playerO.sign)) return returnEmpty("r", playerO.lastMove.row);
    if (!lineIsFull("c",playerO.lastMove.col) && hasSigns("c", playerO.lastMove.col, 2, playerO.sign)) return returnEmpty("c", playerO.lastMove.col);
    if (isDiagonal(playerO.lastMove.row, playerO.lastMove.col)) {
      if (!lineIsFull("d",1) && hasSigns("d", 1, 2, playerO.sign)) return returnEmpty("d", 1);
      if (!lineIsFull("d",2) && hasSigns("d", 2, 2, playerO.sign)) return returnEmpty("d", 2);
    }
    
    // Calculate the best move to defend
    if (!lineIsFull("r",playerX.lastMove.row) && hasSigns("r", playerX.lastMove.row, 2, playerX.sign)) return returnEmpty("r", playerX.lastMove.row);
    if (!lineIsFull("c",playerX.lastMove.col) && hasSigns("c", playerX.lastMove.col, 2, playerX.sign)) return returnEmpty("c", playerX.lastMove.col);
    if (isDiagonal(playerX.lastMove.row, playerX.lastMove.col)) {
      if (!lineIsFull("d",1) && hasSigns("d", 1, 2, playerX.sign)) return returnEmpty("d", 1);
      if (!lineIsFull("d",2) && hasSigns("d", 2, 2, playerX.sign)) return returnEmpty("d", 2);
    }

    return computerRandomMove();

  }

  function placeMove(row, col) {
    board[row][col] = currentPlayer.sign;
  }

  function checkWinner(row, col) {
    if(lineIsFull("r", row) && hasSigns("r",row,3,currentPlayer.sign)) return true;
    if(lineIsFull("c",col) && hasSigns("c",col,3,currentPlayer.sign)) return true;
    if(isDiagonal(row,col)) {
      if(lineIsFull("d", 1) && hasSigns("d",1,3,currentPlayer.sign)) return true;
      if(lineIsFull("d", 2) && hasSigns("d",2,3,currentPlayer.sign)) return true;
    }
    if (moves >= 8) return true;
    console.log(moves);
    return false;
  }

  function computerMove() {
    let coordinates = calculateComputerMove();
    placeMove(coordinates.row, coordinates.col);
    playerO.lastMove.row = coordinates.row;
    playerO.lastMove.col = coordinates.col;
    return coordinates;
  }

  function playerMove(row, col) {
    if (cellIsEmpty(row, col)) {
      placeMove(row, col);
      playerX.lastMove.row = row;
      playerX.lastMove.col = col;
      return true;
    } else {
      return false;
    }
  }

  return { board, moves, clear, playerMove, computerMove, checkWinner, changeCurrentPlayer};
})();

const displayController = (function Display() {
  let container = document.querySelector("#container");

  //Render the game board
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

  //Clear playing field of child elements before rendering
  function clear(element) {
    while (element.hasChildNodes()) {
      element.lastChild.remove();
    }
  }

  //Show menu with game type choices (Play with a computer or multiplayer)
  function showTypeMenu() {
    document.querySelector("#winner").style.display = "none";
    document.querySelector("#new-game").style.display = "none";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#game-type").style.display = "flex";
  }

  //Show form to enter player names
  function showPlayersMenu(numOfPlayers) {
    document.querySelector("#game-type").style.display = "none";

    let div = document.querySelector("#player-name-input");
    div.style.display = "flex";

    let input1 = document.createElement("input");
    input1.setAttribute("placeholder", "Player X name");
    input1.id = "player-one-name";

    div.appendChild(input1);

    let input2 = document.createElement("input");
    input2.id = "player-two-name";

    if (numOfPlayers == 1) {
      input2.value = "XOXO 3000";
      input2.disabled = true;
      playerO.type = "computer";
    } else {
      input2.setAttribute("placeholder", "Player O name");
      playerO.type = "human";
    }

    div.appendChild(input2);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", "displayController.startNewGame()");
    btn.innerHTML = "Start";

    div.appendChild(btn);
  }

  //Show menu to start a new game
  function startNewGame() {
    let header = document.querySelector("h1");

    if (document.querySelector("#player-one-name").value) {
      playerX.name = document.querySelector("#player-one-name").value;
    }

    if (document.querySelector("#player-two-name").value) {
      playerO.name = document.querySelector("#player-two-name").value;
    }

    header.innerHTML = `${playerX.name} vs ${playerO.name}`;
    header.style.visibility = "visible";

    document.querySelector("#player-name-input").style.display = "none";

    container.style.display = "grid";
    displayController.render(gameBoard);
  }

  return {render, clear, showTypeMenu, showPlayersMenu, startNewGame};
})();

function reset(){
  gameBoard.clear();
  displayController.clear(document.querySelector("#container"));
  displayController.clear(document.querySelector("#player-name-input"));
  document.querySelector("#container").style.display = "none";
  document.querySelector("#winner").style.display = "flex";
}

document.querySelector("#container").addEventListener("click", function(e) {
  if (event.target.className === "playfield") {
    if (!gameBoard.playerMove(e.target.dataset.row, e.target.dataset.col)) {
      return
    } else {
      if (gameBoard.checkWinner(e.target.dataset.row, e.target.dataset.col)) {
        reset()
        return;
      };
      gameBoard.changeCurrentPlayer();
    }

    if (playerO.type == "computer") {
      let  coordinates = gameBoard.computerMove();
      if (gameBoard.checkWinner(coordinates.row, coordinates.col)) {
        reset()
        return;
      };
      gameBoard.changeCurrentPlayer();
    };

    displayController.clear(document.querySelector("#container"));
    displayController.render(gameBoard);
  }
});
