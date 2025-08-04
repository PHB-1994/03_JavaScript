// 팝업 사이즈 450 * 200 화면 가운데 위치

const inputId = document.getElementById("inputId");
const idCheck = document.getElementById("idCheck");

/* 내가 한것
idCheck.addEventListener("click", function () {
  let options = [];
  options.push("width=450");
  options.push("height=200");

  const scrren가로 = window.screen.width;
  const screen세로 = window.screen.height;

  const left = (scrren가로 - 450) / 2;
  const top = (screen세로 - 400) / 2;

  options.push(`left=${left}`);
  options.push(`top=${top}`);

  window.open("28_아이디중복확인.html", "_blank", options.toString());
});
*/

idCheck.addEventListener("click", function () {
  const width = 450;
  const height = 200;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  const options = `
            width=${width},
            height=${height},
            left=${left},
            top=${top},
            `;
  window.open("28_아이디중복확인.html", "_blank", options);
});
