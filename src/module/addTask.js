export default function addTask(taskText, todoList) {
  const li = document.createElement('li');
  li.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span class="task">${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
  todoList.appendChild(li);
}