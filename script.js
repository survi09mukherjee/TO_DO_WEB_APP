const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

let tasks = [];

function createTaskElement(task) {
  const listItem = document.createElement('li');
  listItem.innerText = task.description;

  const timestamp = document.createElement('span');
  timestamp.classList.add('timestamp');
  timestamp.innerText = `Created: ${task.creationDate}`;
  listItem.appendChild(timestamp);

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', () => {
    completeTask(task);
  });
  listItem.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteTask(task);
  });
  listItem.appendChild(deleteButton);

  return listItem;
}

function addTask() {
  const newTaskDescription = newTaskInput.value.trim();
  if (!newTaskDescription) return;

  const newTask = {
    description: newTaskDescription,
    creationDate: new Date().toLocaleString(),
    completed: false,
  };

  tasks.push(newTask);
  renderTasks();
  newTaskInput.value = '';
}

function renderTasks() {
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = createTaskElement(task);
    if (task.completed) {
      completedTasksList.appendChild(listItem);
      listItem.classList.add('completed');
    } else {
      pendingTasksList.appendChild(listItem);
    }
  });
}

function completeTask(task) {
  task.completed = true;
  task.completionDate = new Date().toLocaleString();
  renderTasks();
}

