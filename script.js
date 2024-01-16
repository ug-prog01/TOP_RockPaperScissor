let gameValues = ["Rock", "Paper", "Scissor"];

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
	if (computerSelection == "Rock" && playerSelection == "Scissor" ||
		computerSelection == "Scissor" && playerSelection == "Paper" ||
		computerSelection == "Paper" && playerSelection == "Rock") {
		return 0;
	} else if (computerSelection == playerSelection) {
		return 0;
	} else {
		return 1;
	}
}

function playBestOfFive() {
	let finalScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = getFirstCapital(prompt("ROCK, PAPER, SCISSOR"));
		let computerSelection = getFirstCapital(getComputerChoice());

		let result = playRound(computerSelection, playerSelection);
		if (result == 1) {
			alert("You win this round!");
			finalScore += 1;
		}
	}
	if (finalScore >= 3) {
		alert("You win the series!!");
	} else {
		alert("You Lose the series");
	}
}

playBestOfFive();