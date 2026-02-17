function sauvgarderTâches(tâche){

let Task= JSON.parse(localStorage.getItem("mesTasks"))||[];


Task.push(tâche);




}


function récupérerTâches(){}

function suppTâches(){}
