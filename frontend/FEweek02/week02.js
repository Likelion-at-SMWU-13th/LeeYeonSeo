// DOM 요소 선택
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// 할 일 추가 함수
function addTodo(event) {


  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    // 새 할 일 아이템 생성
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    // 할 일 텍스트 추가
    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todoText;

    // 삭제 버튼 추가
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "삭제";

    // 요소 조립
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
  }
}