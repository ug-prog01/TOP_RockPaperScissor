let gameValues = ["Rock", "Paper", "Scissor"];

let roundsCount = 0;
let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let score = document.querySelector("#score");
let compScore = document.querySelector("#comp-score");

score.innerText = playerScore;
compScore.innerText = computerScore;

let buttons = document.querySelectorAll('p');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playerSelection = e.target.innerText;
		startRound();
	});
});

function getComputerChoice() {
	return gameValues[Math.floor(Math.random() * gameValues.length)]
}

function getFirstCapital(word) {
	let newWord = '';
	newWord += word[0].toUpperCase();

	for (let i = 1; i < word.length; i++) {
		newWord += word[i].toLowerCase();
	}

	return newWord;
}

function playRound(computerSelection, playerSelection) {
	alert(`Computer played ${computerSelection}`);
	roundsCount += 1;
	if (computerSelection == "Rock" && playerSelection == "Scissor" ||
		computerSelection == "Scissor" && playerSelection == "Paper" ||
		computerSelection == "Paper" && playerSelection == "Rock") {
		return -1;
	} else if (computerSelection == playerSelection) {
		return 0;
	} else {
		return 1;
	}
}

function startRound() {
	playerSelection = getFirstCapital(playerSelection);
	let computerSelection = getFirstCapital(getComputerChoice());

	let result = playRound(computerSelection, playerSelection);
	if (result == 1) {
		alert("You win this round!");
		playerScore += 1;
		score.innerText = playerScore;
	} else if (result == -1) {
		computerScore += 1;
		compScore.innerText = computerScore;
	}

	if (roundsCount >= 5 && (playerScore >= 3 || computerScore >= 3)) {
		if (playerScore >= 3) {
			alert("You win the series!!");
		} else {
			alert("You Lose the series");
		}
	}
}