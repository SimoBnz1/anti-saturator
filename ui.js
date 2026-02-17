export function addTask() {
      const taskList = document.getElementById("taskList");

  const taskCard = document.createElement("div");
  taskCard.classList.add("card");


  taskCard.innerHTML = `
    <h3>Nouvelle Tâche</h3>
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
      <button type="submit">Enregistrer</button>
    </form>
  `;
}