// Get elements from the DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

// Store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
  // Clear existing tasks
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  // Render pending tasks
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    listItem.appendChild(taskText);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => completeTask(task));
    listItem.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(task));
    listItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(task));
    listItem.appendChild(deleteButton);

    pendingTasksList.appendChild(listItem);
  });

  // Render completed tasks
  tasks
    .filter((task) => task.completed)
    .forEach((task) => {
      const listItem = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = task.text;
      listItem.appendChild(taskText);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(task));
      listItem.appendChild(deleteButton);

      completedTasksList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask(event) {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (text !== '') {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to mark a task as completed
function completeTask(task) {
  task.completed = true;
  renderTasks();
}

// Function to edit a task
function editTask(task) {
  const editText = prompt('Edit task:', task.text);

  if (editText !== null) {
    const updatedText = editText.trim();

    if (updatedText !== '') {
      task.text = updatedText;
      renderTasks();
    }
  }
}

// Function to delete a task
function deleteTask(task) {
  tasks = tasks.filter((t) => t.id !== task.id);
  renderTasks();
}

// Event listeners
taskForm.addEventListener('submit', addTask);

// Initial rendering
renderTasks();
