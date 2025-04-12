// 음료 리스트 생성
const drinks = [
  {name: "코카콜라", price: 1400,},
  {name: "스프라이트", price: 1400,}, 
  {name: "이프로", price: 1200,}, 
  {name: "포카리스웨트", price: 1800,}, 
  {name: "오라떼", price: 1300,}, 
  {name: "나랑드사이다", price: 1000,}, 
  {name: "데자와", price: 1200,}
]; // 음료 리스트는 배열로 선언하되 각 음료는 객체로 선언

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buyDrink() {
  console.log("🧃 음료수를 뽑아보세요! 🧃 \n");
  let money = score = Math.floor(Math.random() * 5001) + 1000; // 지갑 속 돈은 1000원부터 6000원까지, money는 변하는 값이기에 let으로 선언
  console.log(`현재 지갑에 있는 돈: ${money}원`);
  const ableDrink = []; // 뽑을 수 있는 음료를 담을 배열 선언

  for (i = 0; i < 3; i++) {
    drink = getRandom(drinks);
    if (drink.price <= money) {
      money -= drink.price;
      console.log(`음료 뽑기 시도: ${i+1}`);
      console.log(`${drink.name}가 나왔어요! (가격: ${drink.price}원)`);
      console.log(`지갑에 남은 돈: ${money}원`);
    } 
    else {
      console.log(`음료 뽑기 시도: ${i+1}`)
      console.log("돈이 부족해요! 음료를 살 수 없어요!");
      console.log(`지갑에 남은 돈: ${money}원`);

      // 현재 지갑에 있는 돈으로 구매 가능한 음료 출력
      if (money < 1000) {
        console.log("남은 돈으로 살 수 있는 음료가 없습니다.");
      }
      else {
        console.log("남은 돈으로 살 수 있는 음료는 아래와 같습니다.");
        drinks.forEach((able) => {
          if (able.price <= money && !ableDrink.includes(able.name)) { 
            // js에서는 not in을 사용할 수 없다. 또한 in도 해당 속성의 존재 여부를 확인하는 것이기에 문자열 존재 여부 확인으로 사용하기에 부적합하다.
            // 따라서 문자열 존재 여부를 비교하기 위해서는 includes() 내장함수를 사용해야 한다.
            ableDrink.push(able.name); // list는 push()를 사용하여 추가한다.
          }
        });
        console.log(ableDrink);
      }
    }
  }
}

buyDrink();