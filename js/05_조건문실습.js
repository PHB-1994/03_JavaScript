function 잔액확인하기() {
  // 1. 친구가 빌려달라는 금액 javaScript에서 확인

  // 2. 만약에 친구가 빌려달라는 금액이 5000원 이상이면
  // 잔액이 없어서 힘들것 같아.
  // 5000원 이하면 언제까지 돌려줄 수 있는지 알려줘 ^^를 보냄.
  // (alert) 사용 if - else 사용
  const mpney = document.getElementById("input1");
  const 잔액 = Number(mpney.value);

  if (잔액 >= 5000) {
    alert("잔액이 없어서 힘들것 같아.");
  } else {
    alert("언제까지 돌려줄 수 있는지 알려줘 ^^");
  }
}

function 홀짝기능() {
  const 인풋2 = document.getElementById("input2");
  const val2 = Number(인풋2.value);

  if (val2 % 2 == 1) {
    // 홀수라면
    alert("홀수입니다.");
  } else {
    // 짝수라면
    alert("짝수입니다.");
  }
}

/*
        1. 입력된 거리를 js로 가져오기
        const 인풋3
        const amount 에 value 값 저장

        3km 이하 기본요금 3000원
        3km 초과 10km 이하는 8000원
        10km 초과 모두 20000원
        alert 주행거리 비용은 000입니다.
        */
const 인풋3 = document.getElementById("input3");
const amount = Number(인풋3.value);

function 주행거리계산기능() {
  if (amount <= 3) {
    alert("3km 이하는 요금 3000원");
  } else if (amount <= 10) {
    alert("3km 초과 10km 이하는 8000원");
  } else {
    alert("10km 초과 모두 20000원");
  }
}
