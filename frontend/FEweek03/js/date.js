const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDay();

console.log(`${year}년 ${month}월 ${day}일`);

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`${hours}시 ${minutes}분 ${seconds}초`);

//padStart 사용 -> 문자열 앞쪽에 문자를 채워, 지정된 길이만큼 맞춰주는 메서드 / padEnd: 문자열 뒤쪽을 채움
//사용법: 문자열.padStart(만들 문자열 길이, '채울문자');
const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2,"0")}`;
const formattedHours = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

console.log(formattedDate);
console.log(formattedHours);