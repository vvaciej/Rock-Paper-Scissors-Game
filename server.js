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