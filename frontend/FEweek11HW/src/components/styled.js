import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  align-items: center;
  justify-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  border: #030303 solid 1px;
  border-radius: 1rem;
  padding: 1rem;
  width: 40rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  background-color: #f9f9f9ff;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const CatImg = styled.img`
  width: 20rem;
  border-radius: 1rem;
`;

export const H1 = styled.h1`
  font-size: 4rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export const InfoDiv = styled.div`
  width: 15rem;
  background-color: #f9f9f9ff;
`;

export const Name = styled.p`
  font-size: 2rem;
  font-weight: 700;
  background-color: #f9f9f9ff;
`;

export const Info = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #f9f9f9ff;
`;

export const A = styled.a`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  background-color: #f9f9f9ff;
`;

export const LoadingMsg = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
