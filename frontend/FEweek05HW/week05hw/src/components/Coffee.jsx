import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../Main.Styled";

const Coffee = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/coffees")
      .then((res) => {
        const coffeeMenu = res.data;
        setCoffees(coffeeMenu);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);
  return (
    <S.Container>
      <S.BeverageGrid>
        {coffees.map((coffee) => (
          <S.Card key={coffee.id}>
            <S.Menu>{coffee.menu}</S.Menu>
            <S.CardImage src={coffee.image} alt={coffee.menu} />
            <S.CardBody>
              <S.P>칼로리: {coffee.calorie}</S.P>
              <S.P>당류: {coffee.sugar}</S.P>
              <S.P>단백질: {coffee.protein}</S.P>
              <S.P>포화지방: {coffee.fat}</S.P>
              <S.P>나트륨: {coffee.natrium}</S.P>
              <S.P>카페인: {coffee.caffeine}</S.P>
            </S.CardBody>
            <S.CardDescription>{coffee.description}</S.CardDescription>
          </S.Card>
        ))}
      </S.BeverageGrid>
    </S.Container>
  );
};

export default Coffee;
