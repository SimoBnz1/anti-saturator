// window.tasksAjouter = window.tasksAjouter || []; //il faut le declare à l'ex du function
let taskAjout = [];
export function addTask() {
  
      const taskList = document.getElementById("taskList");

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
 
    //form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // 2. SECURITÉ : Si pour une raison X tasksAjouter est undefined, on le recrée
        if (!taskAjout) {
            taskAjout = [];
        }
   // 1. Création de l'objet avec les données du formulaire
    const newTask = {
        id: Date.now(), // Un ID unique basé sur le temps
        title: form.title.value,
        urgence: parseInt(form.urgence.value), // On convertit en nombre
        importance: parseInt(form.importance.value),
        frequence: parseInt(form.frequence.value),
        
    };
taskAjout.push(newTask);
    //remove card
    taskCard.remove();
// console.log("Bouton cliqué !")
console.log(taskAjout)
  });
}



export function goQuiz() {
//   const flex=document.getElementById('flex')
// flex.classList.add("hidden");
  const titleh2 = document.getElementById('title');
  const cardQuiz = document.getElementById('cardQuiz');

  if (titleh2) titleh2.remove();
  if (cardQuiz) cardQuiz.style.display="block" // affiche le div
   const quizCard = document.createElement("div");
  quizCard.classList.add("card");


 quizCard.innerHTML = `
  <h3 class="quize-title">Évalue ton énergie</h3>
  <div id="cardQuiz" class="hidden">

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

// tableau li ghadi ystocki values
let answers = [];

// live update dyal span
ranges.forEach(range => {
  const valueSpan = range.nextElementSibling;

  range.addEventListener("input", () => {
    valueSpan.textContent = range.value;
  });
});
btnValid.addEventListener("click", () => {

  answers = []; // nresetiw tableau

  ranges.forEach(range => {
    answers.push(Number(range.value));
  });

  console.log("Réponses :", answers);
// mlli


})}

