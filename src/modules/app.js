import { addTask, goQuiz } from "./ui.js";

console.log("app.js chargé ✅");

document.getElementById("btnadd").addEventListener("click", addTask);
document.getElementById("startQuiz").addEventListener("click", goQuiz);