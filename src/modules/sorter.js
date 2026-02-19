
let tasks=[
  { id: "1", title: "Task A", importance: 1, urgence: 5, effort: 5, skipped: false },
  { id: "2", title: "Task B", importance: 5, urgence: 1, effort: 1, skipped: false },
]


let energy=5;

function calculateScore(task, energy) {
  const adjustedEffort = task.effort * (10 - energy) / 10;
  return task.importance + task.urgence - adjustedEffort;
}
