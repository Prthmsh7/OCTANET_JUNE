const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && taskInput.value !== '') {
    const taskText = taskInput.value;
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <span class="remove-task"> X </span>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('change', function(event) {
  const listItem = event.target.parentElement;
  if (event.target.checked) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
});

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-task')) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});
