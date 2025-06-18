export default function editTask(event, tasks, saveTasks, renderTasks) {
  if (event.target.classList.contains('edit-btn')) {
    const li = event.target.closest('li');
    const idx = Array.from(li.parentNode.children).indexOf(li);
    const span = li.querySelector('.task');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    input.className = 'edit-input';
    li.replaceChild(input, span);
    input.focus();

    input.addEventListener('blur', () => {
      tasks[idx].text = input.value.trim() || tasks[idx].text;
      saveTasks(tasks);
      renderTasks();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') input.blur();
    });
  }
}