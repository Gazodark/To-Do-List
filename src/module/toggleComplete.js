export default function toggleComplete(event, tasks, saveTasks, renderTasks) {
  if (event.target.classList.contains('todo-checkbox')) {
    const idx = Number(event.target.getAttribute('data-idx'));
    tasks[idx].completed = event.target.checked;
    saveTasks(tasks);
    renderTasks();
  }
}