import React, { useEffect, useState } from "react";
import axios from "axios";

const CatCard = () => {
  const [cards, setCards] = useState([]);
  const apiKey = import.meta.env.VITE_CAT_API_KEY;

  const getCatImage = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search/", {
        headers: { "x-api-key": apiKey },
        params: {
          limit: 5,
          has_breeds: 1,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCatImage();
  }, []);
  return (
    <>
      {cards.map((card) => (
        <div key={card.id}>
          <div>
            <img src={card.url} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CatCard;
