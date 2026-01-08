let current = 0;
let selections = new Map();
let submitted = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const scoreTextEl = document.getElementById("scoreText");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const retryBtn = document.getElementById("retryBtn");

function renderQuestion() {
  const q = QUESTIONS[current];
  questionEl.innerHTML = `Câu ${current + 1}/${QUESTIONS.length}: ${q.text}`;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.innerHTML = opt;
    li.addEventListener("click", () => onSelect(idx));
    optionsEl.appendChild(li);
  });

  const chosen = selections.get(q.id);
  if (chosen !== undefined) optionsEl.children[chosen].classList.add("selected");

  if (submitted) {
    Array.from(optionsEl.children).forEach((li, idx) => {
      if (idx === q.answerIndex) li.classList.add("correct");
      const chosenIdx = selections.get(q.id);
      if (chosenIdx === idx && idx !== q.answerIndex) li.classList.add("wrong");
    });
    feedbackEl.innerHTML = `<em>Giải thích:</em> ${q.explain}`;
  } else {
    feedbackEl.textContent = "";
  }

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === QUESTIONS.length - 1;
  submitBtn.disabled = selections.size < QUESTIONS.length || submitted;

  if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
}

function onSelect(idx) {
  if (submitted) return;
  const q = QUESTIONS[current];
  selections.set(q.id, idx);
  Array.from(optionsEl.children).forEach(li => li.classList.remove("selected"));
  optionsEl.children[idx].classList.add("selected");
  submitBtn.disabled = selections.size < QUESTIONS.length;
}

function submitQuiz() {
  submitted = true;
  let score = 0;
  QUESTIONS.forEach(q => {
    const chosen = selections.get(q.id);
    if (chosen === q.answerIndex) score++;
  });
  scoreTextEl.textContent = `Bạn đúng ${score}/${QUESTIONS.length}.`;
  resultEl.classList.remove("hidden");
  renderQuestion();
}

function retry() {
  current = 0;
  selections.clear();
  submitted = false;
  resultEl.classList.add("hidden");
  renderQuestion();
}

prevBtn.addEventListener("click", () => { current--; renderQuestion(); });
nextBtn.addEventListener("click", () => { current++; renderQuestion(); });
submitBtn.addEventListener("click", submitQuiz);
retryBtn.addEventListener("click", retry);

renderQuestion();