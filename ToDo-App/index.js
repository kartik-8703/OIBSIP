const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function getDateTime() {
  const now = new Date();
  return now.toLocaleString();
}


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  const time = document.createElement("span");
  time.className = "timestamp";
  time.innerText = "Added: " + getDateTime();

  const btns = document.createElement("div");
  btns.className = "buttons";

 
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerText = "✓";
  completeBtn.onclick = () => completeTask(li, span.innerText);

  
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerText = "✎";
  editBtn.onclick = () => {
    const newTask = prompt("Edit Task:", span.innerText);
    if (newTask) span.innerText = newTask;
  };


  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "✗";
  deleteBtn.onclick = () => li.remove();

  btns.appendChild(completeBtn);
  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(time);
  li.appendChild(btns);

  pendingList.appendChild(li);

  taskInput.value = "";
}


function completeTask(taskElement, taskText) {
  taskElement.remove();

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  const time = document.createElement("span");
  time.className = "timestamp";
  time.innerText = "Completed: " + getDateTime();

  const btns = document.createElement("div");
  btns.className = "buttons";

 
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerText = "✎";
  editBtn.onclick = () => {
    const newTask = prompt("Edit Task:", span.innerText);
    if (newTask) span.innerText = newTask;
  };

  
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "✗";
  deleteBtn.onclick = () => li.remove();

  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(time);
  li.appendChild(btns);

  completedList.appendChild(li);
}
