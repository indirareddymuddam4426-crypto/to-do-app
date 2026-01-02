const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load saved tasks
tasks.forEach(task => addTaskToUI(task));

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  addTaskToUI(taskText);
  taskInput.value = "";
}

function addTaskToUI(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => deleteTask(taskText, li);

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function deleteTask(taskText, li) {
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskList.removeChild(li);
}
