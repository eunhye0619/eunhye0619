function addItem(inputId) {
    // 사용자가 입력한 텍스트 가져오기
    var input = document.getElementById(inputId).value;

    if (input === "") {
        // 입력된 내용이 없으면 아무 작업도 수행하지 않음
        return;
    }

    // 새로운 목표 아이템을 생성
    var newItem = document.createElement("li");
    newItem.innerText = input;

    // 삭제 버튼을 생성
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "-";
    deleteButton.onclick = function() {
        deleteItem(this);
    };

    // 목표 아이템에 삭제 버튼 추가
    newItem.appendChild(deleteButton);

    // 목표 아이템을 해당 목표 리스트에 추가
    var list = document.createElement("ul");
    list.appendChild(newItem);

    // 목표 리스트를 해당 입력박스 아래에 추가
    var inputBox = document.getElementById(inputId);
    inputBox.parentNode.insertBefore(list, inputBox.nextSibling);

    // 입력박스 초기화
    inputBox.value = "";
}
function deleteItem(button) {
    // 삭제 버튼의 부모 요소인 목표 아이템을 삭제
    var item = button.parentNode;
    item.parentNode.removeChild(item);
}

//Goal 보이게 하기
function toggleGoal(){
    var goal=document.getElementById("Goal");
    if(goal.style.display === "none"){
        goal.style.display="block";
    }else{
        goal.style.display="none";
    }
  }