// rules section
const rulesBtn = document.querySelector('.rules-btn');
const closeRulesIconBtn = document.querySelector('.close-rules-icon');
const rulesContainer = document.querySelector('.rules-container');
const htmlEl = document.querySelector('html');

function toggleRules () {
  rulesContainer.classList.toggle('active');
  htmlEl.classList.toggle('opacity', rulesContainer.classList.contains('active'));
}

function closeRules () {
  rulesContainer.classList.remove('active');
  htmlEl.classList.remove('opacity');
}

rulesBtn.addEventListener('click', toggleRules);
closeRulesIconBtn.addEventListener('click', closeRules);

// results section
// step 1 section
const allGameBtnContainers = document.querySelectorAll('.btn-container');

function showWhatYouPicked (e) {
  const pickedContainer = document.querySelector('.picked-container');
  const mainContainer = document.querySelector('.main-container');
  const youPickedText = document.querySelector('.you-picked-text');
  const pickedLeftSide = document.querySelector('.picked-left-side');

  const btnClickedContainer = e.currentTarget;
  const btnClickedValue = btnClickedContainer.dataset.value;

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

allGameBtnContainers.forEach((container) => {
  container.addEventListener('click', function (e) {
    showWhatYouPicked(e);
  });
});

