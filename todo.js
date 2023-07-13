let inputBox = document.getElementById('inputField');  // 할 일 입력창
let addToDo = document.getElementById('addToDo');      // 버튼
let toDoList = document.getElementById('toDoList');    // 할 일 리스트창

addToDo.addEventListener('click', function(){    // 버튼에 클릭 이벤트가 발생하면
    var list = document.createElement('li');     // html 'li' 태그 만들기
    if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else
    {
        list.innerText = inputBox.value;  // <li>입력된 할 일</li>
        toDoList.appendChild(list);       // 할 일 리스트창에 자식으로 붙이기
        inputBox.value= "";               // 할 일 입력창 초기화
    }

    list.addEventListener('click', function(){      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function(){   // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
        toDoList.removeChild(list);
    })
})

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scheduleForm');
    form.addEventListener('submit', event => {
      event.preventDefault();
    });
  });
  
  function addSchedule() {
    const timeSelect = document.getElementById('time');
    const eventInput = document.getElementById('event');
  
    const time = timeSelect.value;
    const event = eventInput.value;
  
    if (time && event) {
      const tableBody = document.querySelector('#scheduleTable tbody');
  
      const newRow = document.createElement('tr');
  
      const timeCell = document.createElement('td');
      timeCell.textContent = time;
  
      const eventCell = document.createElement('td');
      eventCell.textContent = event;
  
      const deleteCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.addEventListener('click', () => {
        tableBody.removeChild(newRow);
      });
      deleteCell.appendChild(deleteButton);
  
      newRow.appendChild(timeCell);
      newRow.appendChild(eventCell);
      newRow.appendChild(deleteCell);
  
      tableBody.appendChild(newRow);
  
      timeSelect.value = '';
      eventInput.value = '';
    }
  }
  