function computerPlay(){
	const move = ['rock', 'paper', 'scissors'];
	return move[Math.floor(Math.random() * 3)];
}
 
function playRound(playerSelection, computerSelection){
	switch (playerSelection) {
		case 'rock':
		  return (computerSelection == 'paper') ? 'looser'
		             : (computerSelection == 'scissors') ? 'winner'
		             : 'tie';
		  break;
		  case 'paper':
		  return (computerSelection == 'scissors') ? 'looser'
		             : (computerSelection == 'rock') ? 'winner'
		             : 'tie';
		  break;
		  case 'scissors':
		  return (computerSelection == 'rock') ? 'looser'
		             : (computerSelection == 'paper') ? 'winner'
		             : 'tie';
		  break;
	}
} 


let playerScore = 0;
let computerScore = 0;
const player = document.querySelectorAll('.player > *');
const score = document.querySelector('#score');
const btns = document.querySelectorAll('.nav > *');

player.forEach(btn => btn.addEventListener('click', function(e){
	
	computerBtn = document.querySelector(`.computer > .${computerPlay()}`);

	switch (playRound(e.target.className, computerBtn.className)) {
		case 'winner':
			playerScore++;
		break;
		case 'looser':
			computerScore++;
		break;
	}

	e.target.classList.add('selected');
	computerBtn.classList.add('selected');

	score.innerHTML = playerScore + " : " + computerScore;

	if (playerScore === 5) {
		score.innerHTML = 'You won!';
		btns.forEach(element => element.style.display = 'none');
	} else if (computerScore === 5) {
		score.innerHTML = 'PC won!';
		btns.forEach(element => element.style.display = 'none');
	}
	
}));

btns.forEach(btn => btn.addEventListener('transitionend', function(e){
	e.target.classList.remove('selected');
}));