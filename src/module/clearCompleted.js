export default function clearCompleted(todoList) {
  const completedTasks = todoList.querySelectorAll('.completed');
  completedTasks.forEach((task) => task.remove());
}