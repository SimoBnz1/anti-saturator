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
// console.log(taskAjout)
  });
}