import removeTask from './module/removeTask.js';
import toggleComplete from './module/toggleComplete.js';
import enableDragAndDrop from './module/enableDragAndDrop.js';
import editTask from './module/editTask.js';
import { saveTasks, loadTasks } from './module/storage.js';

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

let tasks = loadTasks();

function renderTasks() {
  todoList.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');
    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${task.completed ? 'checked' : ''} data-idx="${idx}">
      <span class="task">${task.text}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

renderTasks();

addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    saveTasks(tasks);
    renderTasks();
    todoInput.value = '';
  }
});

todoList.addEventListener('click', (event) => {
  removeTask(event, tasks, saveTasks, renderTasks);
  editTask(event, tasks, saveTasks, renderTasks);
});
todoList.addEventListener('change', (event) => {
  toggleComplete(event, tasks, saveTasks, renderTasks);
});
clearCompletedBtn.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks(tasks);
  renderTasks();
});
enableDragAndDrop(todoList);