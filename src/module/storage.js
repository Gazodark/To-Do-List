export function saveTasks(tasks) {
  localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

export function loadTasks() {
  return JSON.parse(localStorage.getItem('todo-tasks')) || [];
}