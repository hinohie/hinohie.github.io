function popupAccount(id, name, accountInfo) {
  const $target = document.getElementById(id);
  $target.innerHTML = '<div class="Pop-up">\
  <div class="Title">계좌 번호 복사</div>\
  <div class="Content">' +
    `<div class="Name">${name}</div>` +
    `<div class="AccountNumber">${accountInfo}</div>` +
  '</div>\
  <div class="ConfirmButton">\
    <div class="Left">\
      <div class="Text" style="color: white">클립보드에 복사</div>\
    </div>\
    <div class="Right">\
      <div class="Text" style="color: black">닫기</div>\
    </div>\
  </div>\
</div>';
}

function generateAccountInfoBoard() {
  const name1 = ["신랑", "어머님", "신부", "아버님", "어머님"];
  const name2 = ["홍은기", "유문숙", "이정민", "이재준", "한승혜"];

  const $target = document.getElementById("AccountBoard");
  let text = "";
  for(var i = 0; i < name1.length; i++)
  {
      text += '\
      <div class="Account">\
        <div class="Line">' +
          `<div class="Text">${name1[i]}</div>` +
          `<div class="Text">${name2[i]}</div></div>` +
          '<div class="Button" style="margin-left: 20px">\
            <div class="Text">계좌</div>\
          </div>\
          <div class="Button">\
            <div class="Text">카카오페이</div>\
          </div>\
      </div>';

      if(i == 1) {
        text += '<div style="width: 80%; margin: 20px; height: 0px; border: 1px #0F0F2F solid"></div>';
      }
  }

  $target.innerHTML = text;
}

generateAccountInfoBoard();
