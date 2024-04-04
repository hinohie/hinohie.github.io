function popupClose()
{
  const $target = document.getElementById("account-popup");
  $target.style.display = "none";
}

function copyClipboad(title, text)
{
  if (navigator?.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${title}` + "가 복사되었습니다.");
    });
  } else {
    window.prompt(`${title}` + "를 복사해 주세요.", text);
  }
};

function popupAccount(title, name, bank, accountInfo) {
  const $target = document.getElementsByClassName("Pop-up-wrapper")[0];
  $target.innerHTML = '<div class="Pop-up">' +
  `<div class="Title">${title}</div>` +
  '<div class="Content">' +
    `<div class="Name">${name}</div>` +
    `<div class="Name">${bank}</div>` +
    `<div class="AccountNumber">${accountInfo}</div>` +
  '</div>\
  <div class="ConfirmButton">' +
    `<button class="Left"onclick="copyClipboad('${title}', '${accountInfo}')">` +
    '  <div class="Text" style="color: white">복사</div>\
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
  const bank = ["하나", "국민", "신한", "대구", "우리"];
  const account = ["28891034580507", "66620101567477", "110456124617", "06213044950", "98000930002001"];
  const kakao = ["https://qr.kakaopay.com/FHPNUIlfM", "https://qr.kakaopay.com/Ej8G4aAMr", "https://qr.kakaopay.com/FXSwx4jqW", "", ""];

  const $target = document.getElementById("AccountBoard");
  let text = "";
  for(var i = 0; i < name1.length; i++)
  {
    let accountDisabled = "";
    let kakaoDisabled = "";
    // Disable button if some informations are not ready.
    if(account[i] == "")
    {
      accountDisabled = `disabled="disabled"`;
    }
    if(kakao[i] == "")
    {
      kakaoDisabled = `disabled="disabled"`;
    }
    text += '\
    <div class="Account">\
      <div class="Line">' +
        `<div class="Text">${name1[i]}</div>` +
        `<div class="Text">${name2[i]}</div>` +
      `</div>` +
      `<div></div>` +
      `<div class="ButtonWrapper">` +
        `<button class="Button" onclick="popupAccount('계좌번호', '${name2[i]}', '${bank[i]}', '${account[i]}')" ${accountDisabled}>` +
        '  <div class="Text">계좌</div>\
        </button>' +
        `<button class="Button" onclick="window.open('${kakao[i]}');" ${kakaoDisabled}>` +
        '  <div class="Text">카카오페이</div>\
        </button>\
      </div>\
    </div>';

    if(i == 1) {
      text += '<div style="width: 80%; margin: 20px; height: 0px; border: 1px #0F0F2F solid"></div>';
    }
  }

  $target.innerHTML = text;
}

generateAccountInfoBoard();
