import addTask from './module/addTask.js';
import removeTask from './module/removeTask.js';

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText) {
    addTask(taskText, todoList);
    todoInput.value = '';
  }
});
todoList.addEventListener('click', (event) => removeTask(event));
