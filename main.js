//select elment
let tasksCounter = document.querySelector(".tasks");
let inputField = document.querySelector("input");
let addButton = document.querySelector(".add");
// lod page get item form locasl storag3
let strord = localStorage.getItem("tasks");
let tasks = strord ? JSON.parse(strord) : [];
//update the local storage
function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//displyTasks
function displayTasks() {
  tasksCounter.innerHTML = "";
  tasks.forEach((task, index) => {
    let textDiv = document.createElement("div");
    textDiv.classList.add("task");
    textDiv.innerHTML = `<span>${task}</span> <button class="delete" onclick="tasksDelete(${index})">X</button>`;
    tasksCounter.appendChild(textDiv);
  });
  updateLocalStorage();
}


function addTask() {
  let taskText = inputField.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    inputField.value = "";
    displayTasks();
  }
}
function tasksDelete(index){
    tasks.splice(index, 1);
    displayTasks();
}

addButton.addEventListener("click", addTask);
displayTasks();
 