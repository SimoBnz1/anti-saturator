const KEY = "mesTasks";

export function sauvegarderTache(tache) {
  const tasks = JSON.parse(localStorage.getItem(KEY)) || [];
  tasks.push(tache);
  localStorage.setItem(KEY, JSON.stringify(tasks));
}

export function recupererTaches() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function supprimerTache(id) {
  const tasks = recupererTaches();
  const filtered = tasks.filter(t => t.id !== id);
  localStorage.setItem(KEY, JSON.stringify(filtered));
}