import React from "react";
import rank2_2 from "../assets/rank2_2.svg";
import styled from "styled-components";

const Rank = styled.div`
  p {
    margin-top: 0.2rem;
    margin-bottom: 0px;
    font-size: 15.5px;
    font-weight: 400;
  }
  span {
    color: #7e7e7e;
    font-size: 12px;
    font-weight: 400;
  }
  cursor: pointer;
`;

const RankImg = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`;

const Rank2_2 = () => {
  const isKorea = true;
  return (
    <div>
      <Rank>
        <RankImg src={rank2_2}></RankImg>
        <p style={{ marginBottom: "10px" }}>하이파이브</p>
        <span>
          <span style={{ color: "#1E1E1E", fontSize: "14px" }}>
            {isKorea ? "2025 · 한국" : "2025 · 미국"}
          </span>
          <br />
          예매율 20% · 누적 관객 493명
        </span>
      </Rank>
    </div>
  );
};

export default Rank2_2;
