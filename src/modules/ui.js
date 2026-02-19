import { sauvegarderTache, recupererTaches } from "./storage.js";

// récupération tasks depuis localStorage
let taskAjout = recupererTaches();

export function addTask() {
  const btnAdd = document.getElementById('btnadd');
  const titleh2 = document.getElementById('titleh2');
  const taskList = document.getElementById("taskList");

  if (btnAdd) btnAdd.style.display = "none";
  if (titleh2) titleh2.style.display = "none";

  const taskCard = document.createElement("div");
  taskCard.classList.add("card");

  taskCard.innerHTML = `
    <h3 class="task-title">Nouvelle Tâche</h3>
    <form class="task-form">
      <label>
        Titre:
        <input type="text" name="title" placeholder="Titre de la tâche" required>
      </label>
      <label>
        Urgence: <span class="value-urgence">3</span>
        <input type="range" name="urgence" min="1" max="5" value="3">
      </label>
      <label>
        Importance: <span class="value-importance">3</span>
        <input type="range" name="importance" min="1" max="5" value="3">
      </label>
      <label>
        Fréquence: <span class="value-frequence">3</span>
        <input type="range" name="frequence" min="1" max="5" value="3">
      </label>
      <button type="submit" class="btn-submit">Enregistrer</button>
    </form>
  `;

  taskList.appendChild(taskCard);

  const form = taskCard.querySelector(".task-form");
  const ranges = form.querySelectorAll('input[type="range"]');

  ranges.forEach(range => {
    const span = form.querySelector(`.value-${range.name}`);
    range.addEventListener("input", () => {
      span.textContent = range.value;
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // id unique avec Date.now()
    const newTask = {
      id: Date.now(),
      title: form.title.value,
      urgence: parseInt(form.urgence.value),
      importance: parseInt(form.importance.value),
      frequence: parseInt(form.frequence.value),
    };

    taskAjout.push(newTask);
    sauvegarderTache(newTask);

    taskCard.remove();
    renderTasks();

    if (btnAdd) btnAdd.style.display = "block";
    if (titleh2) titleh2.style.display = "block";
  });
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  taskAjout.forEach(task => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("card");

    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>Urgence: ${task.urgence}</p>
      <p>Importance: ${task.importance}</p>
      <p>Fréquence: ${task.frequence}</p>
    `;

    taskList.appendChild(taskItem);
  });
}

export function goQuiz() {
  const btnAdd = document.getElementById('btnadd');
  const titleh2 = document.getElementById('titleh2');
  const taskList = document.getElementById("taskList");

  if (btnAdd) btnAdd.style.display = "none";
  if (titleh2) titleh2.style.display = "none";

  const quizCard = document.createElement("div");
  quizCard.classList.add("card");

  quizCard.innerHTML = `
    <h3 class="quize-title">Évalue ton énergie</h3>
    <div id="cardQuiz">
      <div class="question">
        <p>1. Comment te sens-tu aujourd'hui ?</p>
        <div class="range-box">
          <input type="range" min="1" max="10" value="5">
          <span class="range-value">5</span>
        </div>
      </div>

      <div class="question">
        <p>2. As-tu bien dormi ?</p>
        <div class="range-box">
          <input type="range" min="1" max="10" value="5">
          <span class="range-value">5</span>
        </div>
      </div>

      <div class="question">
        <p>3. Es-tu motivé(e) ?</p>
        <div class="range-box">
          <input type="range" min="1" max="10" value="5">
          <span class="range-value">5</span>
        </div>
      </div>

      <button class="btn-primary">Valider</button>
    </div>
  `;

  taskList.appendChild(quizCard);

  const ranges = quizCard.querySelectorAll("input[type='range']");
  const btnValid = quizCard.querySelector(".btn-primary");

  ranges.forEach(range => {
    const span = range.nextElementSibling;
    range.addEventListener("input", () => {
      span.textContent = range.value;
    });
  });

  btnValid.addEventListener("click", () => {
    let answers = [];
    ranges.forEach(range => answers.push(Number(range.value)));
    console.log("Réponses :", answers);
  });
}

// afficher tasks au load
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});
