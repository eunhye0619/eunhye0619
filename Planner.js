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
// 일정 추가
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'today'
        },
        initialDate: '2023-07-01'
        , editable : true
        , eventLimit : true
        , events: [
            
            {
                title : 'libft 과제이해',
                start: '2023-07-26',
                backgroundColor: "#AFD3E2",
                textColor : "#000000"
            },
            {
                title : 'libft 코딩',
                start: '2023-07-27',
                backgroundColor: "#AFD3E2",
                textColor : "#000000"
            },
            {
                title : 'libft 평가',
                start: '2023-07-29',
                backgroundColor: "#AFD3E2",
                textColor : "#000000"
            },
        ]
    });
        calendar.render();
});