// rules section
const rulesBtn = document.getElementById('rulesBtn');
const closeRulesIconBtn = document.getElementById('closeRulesIconBtn');

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
closeRulesIconBtn.addEventListener('click', closeRules);

// results section
// step 1 section
const allGameBtn = document.querySelectorAll('#gameBtn');

function showWhatYouPicked (e) {
  const pickedContainer = document.getElementById('pickedContainer');
  const mainContainer = document.getElementById('mainContainer');
  const youPickedText = document.getElementById('youPickedText');
  const pickedLeftSide = document.getElementById('pickedLeftSide');

  const btnClicked = e.target;
  const btnClickedValue = btnClicked.dataset.value;

  const createDiv = document.createElement('div');
  createDiv.classList.add(`${btnClickedValue}-btn-container`, 'btn-container', 'bigger');
  createDiv.innerHTML = `
    <button class="${btnClickedValue}-btn game-btn">
      <img class="btn-img-icon" src="/images/icon-${btnClickedValue}.svg" alt="${btnClickedValue}-icon">
    </button>
  `;
  pickedLeftSide.append(createDiv);
  
  youPickedText.textContent = 'You picked ' + btnClickedValue;

  mainContainer.classList.remove('active');
  pickedContainer.classList.add('active');
}

allGameBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    showWhatYouPicked(e);
  });
});

