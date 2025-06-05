import addTask from './module/addTask.js';
import removeTask from './module/removeTask.js';
import toggleComplete from './module/toggleComplete.js';
import enableDragAndDrop from './module/enableDragAndDrop.js';
import clearCompleted from './module/clearCompleted.js';
import editTask from './module/editTask.js';

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText) {
    addTask(taskText, todoList);
    todoInput.value = '';
  }
});
todoList.addEventListener('click', (event) => removeTask(event));
todoList.addEventListener('change', (event) => toggleComplete(event));
clearCompletedBtn.addEventListener('click', () => clearCompleted(todoList));
enableDragAndDrop(todoList);
todoList.addEventListener('click', (event) => {
  removeTask(event);
  editTask(event);
});