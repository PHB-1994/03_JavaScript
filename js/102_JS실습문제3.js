const colorBox = document.getElementById("colorBox");
const colors = ["red", "blue", "green", "yellow"];

let colorIndex = 0;

colorBox.addEventListener("click", function () {
  this.style.backgroundColor = colors[colorIndex];
  // +  -  *  % 나머지  / 몫
  colorIndex = (colorIndex + 1) % colors.length;
});

const sizeBox = document.querySelector("#sizeBox");
const currentSize = document.querySelector("#currentSize");
let val = 100;

sizeBox.addEventListener("dblclick", function () {
  if (val == 100) {
    val = 150;
  } else if (val == 150) {
    val = 200;
  } else if (val >= 200) {
    val = 100;
  }
  sizeBox.style.width = val + "px";
  sizeBox.style.height = val + "px";
  currentSize.innerText = val + "px";
});

const textInput = document.querySelector("#textInput");
const display = document.querySelector("#display");

textInput.addEventListener("input", function () {
  display.textContent = `${textInput.value} - 글자수 : ${textInput.value.length}`;
});

textInput.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    textInput.value = ""; // 값 초기화
    display.textContent = "글자 수: 0";
  }
});
