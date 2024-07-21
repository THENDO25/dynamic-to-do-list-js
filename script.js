
document.addEventListener('DOMContentLoaded', () => {
  
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    
    function addTask(taskText, save = true) {
      const taskListItem = document.createElement('li');
      taskListItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
  
      removeButton.onclick = () => {
        taskList.removeChild(taskListItem);
        updateTasksInLocalStorage();
      };
  
      taskListItem.appendChild(removeButton);
      taskList.appendChild(taskListItem);
  
      if (save) {
        updateTasksInLocalStorage(taskText);
      }
    }
  
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });
  
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    }
  });
  
  
  function addTask(taskText, save = true) {
    const taskListItem = document.createElement('li');
    taskListItem.textContent = taskText;
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
  
    removeButton.onclick = () => {
      taskList.removeChild(taskListItem);
      updateTasksInLocalStorage();
    };
  
    taskListItem.appendChild(removeButton);
    taskList.appendChild(taskListItem);
  
    if (save) {
      updateTasksInLocalStorage(taskText);
    }
  }
  
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach((taskText) => addTask(taskText, false));
    }
    loadTasks();
    
    
    function updateTasksInLocalStorage(taskText = '') {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      if (taskText !== '') {
        storedTasks.push(taskText);
      } else {
        const taskListElements = taskList.children;
        storedTasks.length = 0;
        for (let i = 0; i < taskListElements.length; i++) {
          storedTasks.push(taskListElements[i].textContent);
        }
      }
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  });