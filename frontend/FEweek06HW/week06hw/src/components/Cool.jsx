import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../Main.Styled";

const Cool = () => {
  const [cools, setCools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/coolMenus")
      .then((res) => {
        const coolMenu = res.data;
        setCools(coolMenu);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);
  return (
    <div>
      <S.Container>
        <S.BeverageGrid>
          {cools.map((cool) => (
            <S.Card key={cool.id}>
              <S.Menu>{cool.menu}</S.Menu>
              <S.CardImage src={cool.image} alt={cool.menu} />
              <S.CardBody>
                <S.P>칼로리: {cool.calorie}</S.P>
                <S.P>당류: {cool.sugar}</S.P>
                <S.P>단백질: {cool.protein}</S.P>
                <S.P>포화지방: {cool.fat}</S.P>
                <S.P>나트륨: {cool.natrium}</S.P>
                <S.P>카페인: {cool.caffeine}</S.P>
              </S.CardBody>
              <S.CardDescription>{cool.description}</S.CardDescription>
            </S.Card>
          ))}
        </S.BeverageGrid>
      </S.Container>
    </div>
  );
};

export default Cool;
