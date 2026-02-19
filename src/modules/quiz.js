export {};
let question1 = document.getElementById('question1');
let question2 =document.getElementById('question2');
let question3 = document.getElementById('question3');
let result = document.getElementById('result');

function addQuize(){
    let scor = Number(question1.value) + Number(question2.value) + Number(question3.value);
    let average = scor / 3;
    result.textContent = 'Résultat: ' + average.toFixed(1);
}
question1.addEventListener('input' , addQuize);
question2.addEventListener('input' , addQuize);
question3.addEventListener('input' , addQuize);

addQuize();




