function checkSubmit() {
  const nickname = document.getElementById("Nickname").value;
  var Confirm = confirm (nickname + "님, 질문을 제출하시겠습니까?");
  
  if (!Confirm) {
    e.preventDefault(); // 제출을 막습니다.
  } else {
    alert("제출되었습니다!");
  }
  }