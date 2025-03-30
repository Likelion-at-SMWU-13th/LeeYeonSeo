function checkSubmit() {
  const nickname = document.getElementById("Nickname").value;
  var Confirm = confirm (nickname + "님, 메세지를 보내시겠습니까?");
  
  if (!Confirm) {
    e.preventDefault(); // 제출을 막습니다.
  } else {
    alert("메세지를 전송하였습니다!");
  }
  }