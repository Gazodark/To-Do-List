export default function removeTask(event, tasks, saveTasks, renderTasks) {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.closest('li');
    const idx = Array.from(li.parentNode.children).indexOf(li);
    tasks.splice(idx, 1);
    saveTasks(tasks);
    renderTasks();
  }
}