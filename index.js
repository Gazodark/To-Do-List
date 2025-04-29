import { addTask } from './module/addTask.js';

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
