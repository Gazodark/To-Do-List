export default function editTask(event) {
  if (event.target.classList.contains('edit-btn')) {
    const li = event.target.closest('li');
    const span = li.querySelector('.task');
    const currentText = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.className = 'edit-input';
    li.replaceChild(input, span);
    input.focus();

    input.addEventListener('blur', () => {
      span.textContent = input.value.trim() || currentText;
      li.replaceChild(span, input);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        input.blur();
      }
    });
  }
}