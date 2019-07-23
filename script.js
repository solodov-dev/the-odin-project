function getRandom(){
	return Math.floor(Math.random() * 3);
}

function computerPlay(){
	const move = ['rock', 'paper', 'scissors'];
	return move[getRandom()];
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

const player = document.querySelector('.player');
const text = document.querySelector('p');

player.querySelector('.rock').addEventListener('click', function(e){
	text.innerHTML = playRound('rock', computerPlay());
});

player.querySelector('.paper').addEventListener('click', function(e){
	text.innerHTML = playRound('paper', computerPlay());
});

player.querySelector('.scissors').addEventListener('click', function(e){
	text.innerHTML = playRound('scissors', computerPlay());
});