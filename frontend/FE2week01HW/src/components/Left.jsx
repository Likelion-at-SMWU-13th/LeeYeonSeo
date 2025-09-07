import React from "react";
import styled from "styled-components";
import { usePart } from "../contexts/MemberContext";

const Left = () => {
  const { part, selectPart } = usePart();

  return (
    <Wrapper>
      <button
        style={{
          backgroundColor: part === "프론트엔드" ? "#ffe5c5" : "white",
          borderColor: part === "프론트엔드" ? "#ee7521" : "black",
          color: part === "프론트엔드" ? "#7f3700" : "black",
        }}
        onClick={() => selectPart("프론트엔드")}
      >
        프론트엔드
      </button>
      <button
        style={{
          backgroundColor: part === "백엔드" ? "#ffe5c5" : "white",
          borderColor: part === "백엔드" ? "#ee7521" : "black",
          color: part === "백엔드" ? "#7f3700" : "black",
        }}
        onClick={() => selectPart("백엔드")}
      >
        백엔드
      </button>
      <button
        style={{
          backgroundColor: part === "기획/디자인" ? "#ffe5c5" : "white",
          borderColor: part === "기획/디자인" ? "#ee7521" : "black",
          color: part === "기획/디자인" ? "#7f3700" : "black",
        }}
        onClick={() => selectPart("기획/디자인")}
      >
        기획/디자인
      </button>
      <button
        style={{
          backgroundColor: part === "" ? "#ffe5c5" : "white",
          borderColor: part === "" ? "#ee7521" : "black",
          color: part === "" ? "#7f3700" : "black",
        }}
        onClick={() => selectPart("")}
      >
        전체
      </button>
    </Wrapper>
  );
};

export default Left;

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1.5px solid #e6e6e6;
  overflow-y: auto;
  button {
    display: block;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50px;
    width: 150px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: white;
    cursor: pointer;
    border: 1.5px solid black;
  }
`;
