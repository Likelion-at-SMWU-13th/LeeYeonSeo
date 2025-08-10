import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled.js";

const CatCard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_CAT_API_KEY;

  const getCatImage = () => {
    setLoading(true);
    axios
      .get("https://api.thecatapi.com/v1/images/search/", {
        headers: { "x-api-key": apiKey },
        params: {
          limit: 6,
          has_breeds: 1,
        },
      })
      .then((res) => {
        return Promise.all(
          res.data.map((img) =>
            axios.get(`https://api.thecatapi.com/v1/images/${img.id}`, {
              headers: { "x-api-key": apiKey },
            })
          )
        );
      })
      .then((detailRes) => {
        setCards(detailRes.map((res) => res.data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCatImage();
  }, []);

  if (loading) {
    return (
      <S.LoadingWrapper>
        <S.LoadingMsg>Cats are coming!!... 🐈🐈‍⬛</S.LoadingMsg>
      </S.LoadingWrapper>
    );
  }
  return (
    <>
      {cards.map((card) => (
        <S.CardContainer key={card.id}>
          <S.CatImg src={card.url} />
          <S.InfoDiv>
            <S.Name>{card.breeds[0].name}</S.Name>
            <S.Info>{card.breeds[0].temperament}</S.Info>
            <S.Info>{card.breeds[0].origin}</S.Info>
            <S.Info>{card.breeds[0].life_span}</S.Info>
            <S.A href={card.breeds[0].wikipedia_url}>
              {card.breeds[0].wikipedia_url}
            </S.A>
          </S.InfoDiv>
        </S.CardContainer>
      ))}
    </>
  );
};

export default CatCard;
