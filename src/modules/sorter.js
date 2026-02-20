function calculateScore(task, energy) {
  const adjustedEffort = (task.frequence) * (10 - energy) / 10;
  console.log(adjustedEffort);
  
  return task.importance + task.urgence - adjustedEffort;
}

export function getTopTask(tasks, energy) {
  let bestTask = null;
  let bestScore = -Infinity;

  tasks.forEach(task => {
    const score = calculateScore(task, energy);
  

    if (score > bestScore || (score === bestScore && task.urgence > bestTask?.urgence)) {
      bestScore = score;
      bestTask = task;
    }
  });

  return bestTask;
}