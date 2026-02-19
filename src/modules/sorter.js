
let tasks=[
  { id: "1", title: "Task A", importance: 1, urgence: 5, effort: 5, skipped: false },
  { id: "2", title: "Task B", importance: 5, urgence: 1, effort: 1, skipped: false },
]


let energy=5;

function calculateScore(task, energy) {
  const adjustedEffort = task.effort * (10 - energy) / 10;
  return task.importance + task.urgence - adjustedEffort;
}

function getTopTask(tasks, energy) {

  let bestTask = null;
  let bestScore = 0;

  for (let i = 0; i < tasks.length; i++) {

    if (!tasks[i].skipped) {

      let currentScore = calculateScore(tasks[i], energy);

      if (
        currentScore > bestScore ||

        (
          currentScore === bestScore &&
          tasks[i].urgence > bestTask?.urgence
        )
      ) {
        bestScore = currentScore;
        bestTask = tasks[i];
      }

    }
  }

  return bestTask;
}

console.log(getTopTask(tasks, energy));

