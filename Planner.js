const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;

    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = '';

    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {    
      htmlDummy += `<div>${i}</div>`;
    }

    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }

    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
    }


    const date = new Date();

    makeCalendar(date);

    // 이전달 이동
    document.querySelector(`.prevDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
    }

    // 다음달 이동
    document.querySelector(`.nextDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}

//일정 추가
function addEvent() {
  var choDate = document.getElementById('cho_date').value;
  var eventInput = document.getElementById('eventInput');
  var event = eventInput.value.trim();

  if (choDate === '') {
    alert('날짜를 선택해주세요.');
    return;
  }

  if (event === '') {
    alert('일정을 입력해주세요.');
    return;
  }

  var dateItems = document.querySelectorAll('.dateBoard > div');

  for(var i=0; i<dateItems.length;i++){
    var dateItem = dateItems[i];
    if(dateItem.innerText === choDate){
      var eventItem = document.createElement('p');
      eventItem.innerText=event;
      dateItem.appendChild(eventItem);
      return;
    }
  }

  eventInput.value='';
  document.getElementById('cho_date').value='';
}