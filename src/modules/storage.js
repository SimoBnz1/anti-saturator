const KEY = "mesTasks";
export function sauvgarderTâches(tâche){

let Task= JSON.parse(localStorage.getItem(KEY))[];


Task.push(tâche);

localStorage.setItem('Task',JSON.stringify(Task));




}


export function récupérerTâches(){

return  JSON.parse(localStorage.getItem(KEY))[];


}

export function suppTâches(id){
    const tasks = récupérerTâches();
    const filtered = tasks.filter(task => task.id !== id);
    localStorage.setItem(KEY, JSON.stringify(filtered));
}
const KEY = "mesTasks";
export function sauvgarderTâches(tâche){

let Task= JSON.parse(localStorage.getItem(KEY))[];


Task.push(tâche);

localStorage.setItem('Task',JSON.stringify(Task));

}

export function récupérerTâches(){

return  JSON.parse(localStorage.getItem(KEY))[];

}

export function suppTâches(id){
    const tasks = récupérerTâches();
    const filtered = tasks.filter(task => task.id !== id);
    localStorage.setItem(KEY, JSON.stringify(filtered));
}
