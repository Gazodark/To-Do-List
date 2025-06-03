export default function removeTask(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.closest('li').remove();
  }
}