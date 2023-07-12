// Todolist
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.querySelector('table');

addButton.addEventListener('click', () => {
  const todoText = todoInput.value;
  if (todoText !== '') {
    const tr = document.createElement('tr');
    const time = document.createElement('td');
    const task = document.createElement('td');
    const taskInput = document.createElement('input');
    const addButton = document.createElement('button');
    time.classList.add('time');
    task.classList.add('task');
    addButton.classList.add('addButton');
    taskInput.type = 'text';
    taskInput.classList.add('taskInput');
    taskInput.placeholder = '할 일 추가하기';
    addButton.innerText = '추가';
    addButton.addEventListener('click', () => {
      addTask(taskInput, task);
    });
    time.innerText = getCurrentTime();
    task.appendChild(taskInput);
    task.appendChild(addButton);
    tr.appendChild(time);
    tr.appendChild(task);
    todoList.appendChild(tr);
    todoInput.value = '';
  }
});

function getCurrentTime() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

// 시간대별 할 일
const taskInputs = document.querySelectorAll('.taskInput');

function addTask(input, task) {
  const taskText = input.value;
  if (taskText !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    span.innerText = taskText;
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(span);
    li.appendChild(deleteButton);
    task.appendChild(li);
    input.value = '';
  }
}

taskInputs.forEach((input) => {
  input.previousElementSibling.addEventListener('click', () => {
    const task = input.parentNode;
    addTask(input, task);
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const task = input.parentNode;
      addTask(input, task);
    }
  });
});
