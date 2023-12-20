// rules section
const rulesBtn = document.getElementById('rulesBtn');
const closeRulesBtn = document.getElementById('closeRulesBtn');

function toggleRules () {
  const rulesContainer = document.getElementById('rulesContainer');
  const htmlEl = document.querySelector('html');
  rulesContainer.classList.toggle('active');
  htmlEl.classList.toggle('opacity', rulesContainer.classList.contains('active'));
}

function closeRules () {
  const rulesContainer = document.getElementById('rulesContainer');
  const htmlEl = document.querySelector('html');
  rulesContainer.classList.remove('active');
  htmlEl.classList.remove('opacity');
}

rulesBtn.addEventListener('click', toggleRules);
closeRulesBtn.addEventListener('click', closeRules);

// results section
const pickedContainer = document.getElementById('pickedContainer');
const resultsBtn = document.getElementById('resultsBtn');
const mainContainer = document.getElementById('mainContainer');
const allGameBtn = document.querySelectorAll('#gameBtn');
const resultsText = document.getElementById('resultsText');

function showWhatYouPicked (e) {
  const btnClicked = e.target;
  const btnClickedValue = btnClicked.dataset.value;
  const pickedLeftSide = document.getElementById('pickedLeftSide');
  const createDiv = document.createElement('div');
  createDiv.classList.add(`${btnClickedValue}-btn-container`, 'btn-container', 'bigger');
  createDiv.innerHTML = `
    <button class="${btnClickedValue}-btn game-btn">
      <img class="btn-img-icon" src="/images/icon-${btnClickedValue}.svg" alt="${btnClickedValue}-icon">
    </button>
  `;
  resultsText.textContent = 'You picked ' + btnClickedValue;
  pickedLeftSide.append(createDiv);

  mainContainer.classList.remove('active');
  pickedContainer.classList.add('active');
}

allGameBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    showWhatYouPicked(e);
  });
});
