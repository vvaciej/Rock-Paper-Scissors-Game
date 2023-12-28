// rules section
const rulesBtn = document.querySelector('.rules-btn');
const closeRulesIconBtn = document.querySelector('.close-rules-icon');
const rulesContainer = document.querySelector('.rules-container');
const htmlEl = document.querySelector('html');

function toggleRules() {
	rulesContainer.classList.toggle('active');
	htmlEl.classList.toggle('opacity', rulesContainer.classList.contains('active'));
}

function closeRules() {
	rulesContainer.classList.remove('active');
	htmlEl.classList.remove('opacity');
}

rulesBtn.addEventListener('click', toggleRules);
closeRulesIconBtn.addEventListener('click', closeRules);

// results section
// step 1 section
const allGameBtnContainers = document.querySelectorAll('.btn-container');

const createdDivs = [];

function createBtnGame(btnClickedValue) {
	const createDiv = document.createElement('div');
	createDiv.classList.add(`${btnClickedValue}-btn-container`, 'btn-container', 'bigger');
	
	createdDivs.push(createDiv);

	return createDiv;
}

function showWhatYouPicked(e) {
	const pickedContainer = document.querySelector('.picked-container');
	const mainContainer = document.querySelector('.main-container');
	const youPickedText = document.querySelector('.you-picked-text');
	const pickedLeftSide = document.querySelector('.picked-left-side');

	const btnClickedContainer = e.currentTarget;
	const btnClickedValue = btnClickedContainer.dataset.value;

	const createDiv = createBtnGame(btnClickedValue);
	pickedLeftSide.append(createDiv);

	youPickedText.textContent = 'You picked ' + btnClickedValue;

	mainContainer.classList.remove('active');
	pickedContainer.classList.add('active');

	setTimeout(() => {
		whatPickedAI(btnClickedValue);
	}, 800);
}

allGameBtnContainers.forEach(container => {
	container.addEventListener('click', function (e) {
		showWhatYouPicked(e);
	});
});
// step 2 section
function whatPickedAI(btnClickedValue) {
	const randomNumber = Math.floor(Math.random() * 99);
	let AIchoice = '';

	if (randomNumber >= 0 && randomNumber < 33) {
		showAIpick('paper');
		results(btnClickedValue, 'paper');
		AIchoice = 'paper';
	} else if (randomNumber >= 33 && randomNumber < 66) {
		showAIpick('scissors');
		results(btnClickedValue, 'scissors');
		AIchoice = 'scissors';
	} else if (randomNumber >= 66 && randomNumber <= 99) {
		showAIpick('rock');
		results(btnClickedValue, 'rock');
		AIchoice = 'rock';
	}
}
// step 3 section
function showAIpick(btnClickedValue) {
	const pickPlace = document.querySelector('.ai-picked-container');
	const replacedPick = document.querySelector('.picked-rightside');
	const text = document.querySelector('.ai-picked-text');
	const whoWinContainer = document.querySelector('.picked-result-container');

	pickPlace.classList.remove('active');
	text.textContent = 'AI picked ' + btnClickedValue;

	const createdDiv = createBtnGame(btnClickedValue);
	replacedPick.append(createdDiv);
	whoWinContainer.classList.add('active');
}

function results(youPickedValue, aiPickedValue) {
	const textScore = document.querySelector('.score-count-text');
	const resultsText = document.querySelector('.results-text');
	let scoreNumber = Number(textScore.textContent);

	if (youPickedValue === 'paper' && aiPickedValue === 'rock') {
		resultsText.textContent = 'You win';
		scoreNumber++;
	} else if (youPickedValue === 'paper' && aiPickedValue === 'scissors') {
		resultsText.textContent = 'You lose';
		scoreNumber--;
	} else if (youPickedValue === 'scissors' && aiPickedValue === 'paper') {
		resultsText.textContent = 'You win';
		scoreNumber++;
	} else if (youPickedValue === 'scissors' && aiPickedValue === 'rock') {
		resultsText.textContent = 'You lose';
		scoreNumber--;
	} else if (youPickedValue === 'rock' && aiPickedValue === 'scissors') {
		resultsText.textContent = 'You win';
		scoreNumber++;
	} else if (youPickedValue === 'rock' && aiPickedValue === 'paper') {
		resultsText.textContent = 'You lose';
		scoreNumber--;
	} else {
		resultsText.textContent = 'Draw';
	}

	textScore.textContent = scoreNumber;
}
// reset all section
const playAgainBtn = document.querySelector('.play-again-btn');

playAgainBtn.addEventListener('click', function () {
	const mainContainer = document.querySelector('.main-container');
	const pickedContainer = document.querySelector('.picked-container');
	const whoWinContainer = document.querySelector('.picked-result-container');
	const pickPlace = document.querySelector('.ai-picked-container');
	const text = document.querySelector('.ai-picked-text');

	createdDivs.forEach(div => {
		div.remove();
	});

	text.textContent = 'AI picked...';

	whoWinContainer.classList.remove('active');
	pickPlace.classList.add('active');

	mainContainer.classList.add('active');
	pickedContainer.classList.remove('active');
});
