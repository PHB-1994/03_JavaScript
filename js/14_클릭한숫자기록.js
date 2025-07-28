/* 클릭한 숫자를 10글자 까지만 기록하기 */

// 1. selectAll number id 모두 배열로 가져오기
// 2. id 값을 result로 가져오기

const numbers = document.querySelectorAll(".number");
console.log("numbers : ", numbers);
const result = document.getElementById("result");

for (let i = 0; i < numbers.length; i++) {
  /*
    아래 방법 모두 가능 / 개발자가 편한 방식으로 사용하면 됩니다.
    numbers[i].addEventListener("click", function () {
            result.textContent += this.textContent;
            // function 을 사용할 때는 this 사용할 수 있음
            // addEventListener 앞에 있는 numbers[i] 를 this 로 대신 작성 가능

    numbers[i].addEventListener("click",  () => {
            result.textContent += numbers[i].textContent;
            // function 이 없기 때문에 this 사용할 수 없음!!!
            // addEventListener 앞에 있는 요소 명칭을 직접적으로 작성
            
    numbers[i].addEventListener("click", e => {
            result.textContent += e.target.textContent;
            // function 이 없기 때문에 this 사용 불가
    */
  numbers[i].addEventListener("click", () => {
    if (result.textContent.length == 10) {
      alert("10글자까지만 입력 가능");
      return;
    }
    result.textContent += numbers[i].textContent;
  });
}

// 2탄 초기화 버튼 클릭하면 result 내부의 값 없애기
const reset = document.getElementById("resetBtn");
reset.addEventListener("click", () => {
  result.textContent = "";
});

// 3탄
// numbers[i].addEventListener("click", function () {
// 익명함수 중 화살표 함수로 변경하기
