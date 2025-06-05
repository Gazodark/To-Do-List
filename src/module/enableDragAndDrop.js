/* global Sortable */
export default function enableDragAndDrop(todoList) {
  if (typeof Sortable !== 'undefined') {
    Sortable.create(todoList, {
      animation: 150,
      ghostClass: 'sortable-ghost',
    });
  }
}