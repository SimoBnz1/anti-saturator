function sauvgarderTâches(tâche){

let Task= JSON.parse(localStorage.getItem("mesTasks"))||[];


Task.push(tâche);

localStorage.setItem('Task',JSON.stringify(Task));




}


function récupérerTâches(){}

function suppTâches(){}
