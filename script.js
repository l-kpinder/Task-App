function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => moveToCompleted(li));
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function moveToCompleted(taskItem) {
    const completedList = document.getElementById("completedList");
    taskItem.removeEventListener("click", () => moveToCompleted(taskItem));
    taskItem.addEventListener("click", () => taskItem.remove());
    taskItem.style.textDecoration = "line-through";
    completedList.appendChild(taskItem);
}

function clearCompleted() {
    const completedList = document.getElementById("completedList");
    completedList.innerHTML = "";
}