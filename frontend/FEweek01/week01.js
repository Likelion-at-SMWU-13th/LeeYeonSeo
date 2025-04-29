let first = "yeonseo";
let last = "Lee";

console.log(`My name is ${first} ${last}.
I'm ${20+3} years old.`); //백틱으로 (영타에서 달러 자판) 멀티라인 문자열 작성

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //배열 선언 시 const 사용
console.log(dayOfWeek);

dayOfWeek.push("sun");
console.log(dayOfWeek);

const my = {
  name: "yeonseo",
  age:23,
  major: "Computer Science",
  tired: true,
};

console.log(my);
my.age = 20; // Object 속성 업데이트
my.hungry = true; // Object 속성 추가

console.log(my);

//비교 연산자 == 과 === 비교
console.log(5 == "5");
console.log(5 === "5");

// 삼항 조건 연산자
let x = 10;

let result = x % 2 ? "홀수" : "짝수"; // 나머지 값: 0 -> 값이 0이 나오면 false로 간주
console.log(result); // false일 때 반환되는 값인 짝수가 반환됨

// 조건문 사용 (if...else 문)
/* id = prompt("아이디를 입력해주세요.");
password = prompt("비밀번호를 입력해주세요.");
if (id == "likelion" && password == "1234") {
  alert("인증에 성공했습니다.");
} else {
  alert("인증에 실패했습니다.");
} */

// for문 사용 (중첩 for문을 사용하여 두 수의 합이 6이 되는 모든 경우의 수 출력)
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}

// for...in 문 사용
const person = {
  name: "Lee", // 객체 정의 시 속성 구분에 , 를 사용
  address: "Seoul",
};

for (const key in person) { // 객체의 속성 개수만큼 순회
  console.log(key + ":" + person[key]); // for...in문의 변수 선언문에서 선언한 변수(여기서 key)에 속성 키(name, address)를 할당
}

// while 문 사용
let count = 0;
do {
  console.log(count);
  count++;
} while(count < 3);

// 함수 사용
const sayHi = function() { // 함수를 변수에 넣는 경우
  console.log("안녕!");
};
sayHi(); // 함수 실행

const actions = [sayHi, () => console.log("잘가~")]; // 함수를 배열에 넣는 경우
actions[1]();

function calculate(number) {
  console.log((((number * 10) / 2) * 3).toString());
}

calculate(3);

//function을 사용한 일반적인 함수 선언과 호출
function multiply1(x, y) {
  return x * y;
}

const result1 = multiply1(2, 4);
console.log(result1);

//화살표 함수
const multiply2 = (x, y) => { // 매개변수에 해당하는 값이 소괄호 안에
  return x * y; // 매개변수를 이용한 로직이 중괄호 안에 들어감
};

console.log(multiply2(2, 4));

// Rest Parameter 문법
// 함수에 인자가 몇개 들어올지 모르는 상황에서 주로 사용(전달된 인자들이 배열로 묶임)
const multiplyAll = (...args) => { //multiplyAll에 들어온 인자를 모두 배열로 묶음
  return args.reduce((a, b) => a * b, 1); //reduce는 배열의 요소들을 왼쪽부터 오른쪽으로 곱하는 내장 메서드(초기값: 1)
};

console.log(multiplyAll(3, 4, 5)); // 60 / Rest Parameter 문법을 통해 배열로 변환된 매개변수들을 모두 곱한 값이 반환됨

//forEach문
// forEach 메서드는 자신의 내부에서 반복문을 실행(내부에서 반복문을 통해 자신을 호출한 배열을 순회)
const numbers = [1, 2, 3];
const pows = [];

numbers.forEach((item) => pows.push(item ** 2)); // numbers 배열을 forEach 메서드가 순회하며 각 요소를 차례로 item에 담고, 각 요소마다 거듭제곱이 적용되어 pows 배열에 추가됨
console.log(pows);