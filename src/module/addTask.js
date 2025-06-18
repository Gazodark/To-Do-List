export default function addTask(taskText, todoList) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="todo-checkbox">
    <span class="task">${taskText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  todoList.appendChild(li);
}