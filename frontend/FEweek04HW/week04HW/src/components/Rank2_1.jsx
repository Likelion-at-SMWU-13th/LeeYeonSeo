import React from "react";
import rank2_1 from "../assets/rank2_1.svg";
import star from "../assets/star.svg";
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

const StarIcon = styled.img`
  width: 12px;
  vertical-align: middle;
  padding-bottom: 1px;
`;

const Rank2_1 = () => {
  const isKorea = false;
  return (
    <div>
      <Rank>
        <RankImg src={rank2_1}></RankImg>
        <p style={{ marginBottom: "10px" }}>미션 임파서블: 파이널 레코닝</p>
        <span>
          <span style={{ color: "#1E1E1E", fontSize: "14px" }}>
            {isKorea ? "2025 · 한국" : "2025 · 미국"}
          </span>
          <br />
          평균 <StarIcon src={star}></StarIcon> 3.7
          <br />
          예매율 30% · 누적 관객 159.5만명
        </span>
      </Rank>
    </div>
  );
};

export default Rank2_1;
