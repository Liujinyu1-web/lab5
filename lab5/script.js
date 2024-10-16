// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskToList);
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task.trim() !== "") {
        addTaskToList(task);
        saveTaskToLocalStorage(task);
        taskInput.value = ''; // Clear the input field
    }
}

// Function to add the task to the UI list
function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.textContent = task;

    // Add delete button to the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = function() {
        li.remove();
        removeTaskFromLocalStorage(task);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Function to save task to local storage
function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove task from local storage
function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
