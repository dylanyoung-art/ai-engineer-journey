const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = tasks [i];
        taskList.appendChild(listItem);
    }
}

addTaskButton.addEventListener("click", function() {
    const newTask = taskInput.value.trim();

    if (newTask === "") {
        return;
    }
tasks.push(newTask);
taskInput.value = "";
renderTasks();
});

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});