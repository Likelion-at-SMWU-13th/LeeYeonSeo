function checkSubmit() {
  const nickname = document.getElementById("Nickname").value;
  var Confirm = confirm (nickname + "님, 메세지를 보내시겠습니까?");
  
  if (!Confirm) {
    document.getElementById("form").reset();
    alert("메세지를 전송을 취소하였습니다.");
    return false;
  } else {
    alert("메세지를 전송하였습니다!");
    return true;
  }
  }