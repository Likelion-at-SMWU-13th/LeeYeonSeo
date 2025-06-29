import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../Main.Styled";

const NonCoffee = () => {
  const [nonCoffees, setNonCoffees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/nonCoffees")
      .then((res) => {
        const nonCoffeeMenu = res.data;
        setNonCoffees(nonCoffeeMenu);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);
  return (
    <S.Container>
      <S.BeverageGrid>
        {nonCoffees.map((nonCoffee) => (
          <S.Card key={nonCoffee.id}>
            <S.Menu>{nonCoffee.menu}</S.Menu>
            <S.CardImage src={nonCoffee.image} alt={nonCoffee.menu} />
            <S.CardBody>
              <S.P>칼로리: {nonCoffee.calorie}</S.P>
              <S.P>당류: {nonCoffee.sugar}</S.P>
              <S.P>단백질: {nonCoffee.protein}</S.P>
              <S.P>포화지방: {nonCoffee.fat}</S.P>
              <S.P>나트륨: {nonCoffee.natrium}</S.P>
              <S.P>카페인: {nonCoffee.caffeine}</S.P>
            </S.CardBody>
            <S.CardDescription>{nonCoffee.description}</S.CardDescription>
          </S.Card>
        ))}
      </S.BeverageGrid>
    </S.Container>
  );
};

export default NonCoffee;
