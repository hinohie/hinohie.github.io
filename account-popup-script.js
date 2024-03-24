function popupClose()
{
  const $target = document.getElementById("account-popup");
  $target.style.display = "none";
}

function popupAccount(name, accountInfo) {
  const $target = document.getElementsByClassName("Pop-up-wrapper")[0];
  $target.innerHTML = '<div class="Pop-up">\
  <div class="Title">계좌 번호 복사</div>\
  <div class="Content">' +
    `<div class="Name">${name}</div>` +
    `<div class="AccountNumber">${accountInfo}</div>` +
  '</div>\
  <div class="ConfirmButton">\
    <button class="Left">\
      <div class="Text" style="color: white">복사</div>\
    </button>' +
    `<button class="Right" onclick="popupClose()">` +
    '  <div class="Text" style="color: black">닫기</div>\
    </button>\
  </div>\
  </div>';
  $target.style.display = "flex";
}

function generateAccountInfoBoard() {
  const name1 = ["신랑", "어머님", "신부", "아버님", "어머님"];
  const name2 = ["홍은기", "유문숙", "이정민", "이재준", "한승혜"];
  const account = ["하나 28891034580507", "신협 132004647366", "신한 110-456-124617", "신한 110-517-230136", ""];

  const $target = document.getElementById("AccountBoard");
  let text = "";
  for(var i = 0; i < name1.length; i++)
  {
      text += '\
      <div class="Account">\
        <div class="Line">' +
          `<div class="Text">${name1[i]}</div>` +
          `<div class="Text">${name2[i]}</div></div>` +
          `<button class="Button" onclick="popupAccount('${name2[i]}', '${account[i]}')" style="margin-left: 20px">` +
          '  <div class="Text">계좌</div>\
          </button>\
          <button class="Button">\
            <div class="Text">카카오페이</div>\
          </button>\
      </div>';

      if(i == 1) {
        text += '<div style="width: 80%; margin: 20px; height: 0px; border: 1px #0F0F2F solid"></div>';
      }
  }

  $target.innerHTML = text;
}

generateAccountInfoBoard();
