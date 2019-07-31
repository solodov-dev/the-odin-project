function Player(name, type, sign, lastMove) {
  return { name, type, sign, lastMove };
}

let playerX = Player("Glenn", "human", "×");
let playerO = Player("John", "human", "o");

const gameBoard = (function Gameboard() {
  let board = [["", "", ""], ["", "", ""], ["", "", ""]];
  let currentPlayer = playerX;
  let moves = 1;

  function clear() {
    board.fill("");
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
            console.log("checking", i, i);
            if(board[i][i] == sign) counter++;
          }
          if(counter == signsNumber) return true;
        } else {
          for(let i = 2, j = 0; i >= 0 && j < 3; i--, j++) {
              console.log("checking", i , j)
              if(board[i][j] == sign) counter++;
          }
          if(counter == signsNumber) return true;
        }
        break;
    }
    return false;
  }

  function isDiagonal(col, row) {
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
                if(board[i][j] == sign) return {row: i, col:j};
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
    console.log("Changed");
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
    return computerRandomMove();
  }

  function checkWinner(row, col) {
    if(lineIsFull("r", row) && hasSigns("r",row,3,currentPlayer.sign)) alert("won!");
    if(lineIsFull("c",col) && hasSigns("c",col,3,currentPlayer.sign)) alert("won");
    if(isDiagonal(row,col)) {
      if(lineIsFull("d", 1) && hasSigns("d",1,3,currentPlayer.sign)) alert("won!");
      if(lineIsFull("d", 2) && hasSigns("d",2,3,currentPlayer.sign)) alert("won!");
    }
    if (moves >= 9) alert("tie!");
  }

  function computerMove() {
    let coordinates = calculateComputerMove();
    console.log(coordinates);
    board[coordinates.row][coordinates.col] = currentPlayer.sign;
    checkWinner(coordinates.row, coordinates.col);
    moves++;
    changeCurrentPlayer();
  }

  function move(row, col) {
    console.log(moves);
    if (cellIsEmpty(row, col)) {
      board[row][col] = currentPlayer.sign;
      checkWinner(row, col);
      changeCurrentPlayer();
      moves++;
      return true;
    } else {
      return false;
    }
  }

  return { board, clear, move, computerMove };
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
  function clear() {
    while (container.hasChildNodes()) {
      container.lastChild.remove();
    }
  }

  //Show menu with game type choices (Play with a computer or multiplayer)
  function showTypeMenu() {
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

  return { render, clear, showTypeMenu, showPlayersMenu, startNewGame };
})();

document.querySelector("#container").addEventListener("click", function(e) {
  if (event.target.className === "playfield") {
    if (!gameBoard.move(e.target.dataset.row, e.target.dataset.col)) return;
    if (playerO.type == "computer") gameBoard.computerMove();
    displayController.clear();
    displayController.render(gameBoard);
  }
});
