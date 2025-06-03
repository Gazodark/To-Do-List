export default function toggleComplete(event) {
  if (event.target.classList.contains('todo-checkbox')) {
    const li = event.target.closest('li');
    li.classList.toggle('completed');
  }
}