import styled from "styled-components";

export const HeaderImage = styled.img`
  width: 20rem;
`;

export const Container = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-top: 0.2rem;
  margin-bottom: 0rem;
`;

export const BeverageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1.25rem;
  padding: 1.25rem;
`;

export const Card = styled.div`
  width: 27rem;
  padding: 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  align-items: center;
  justify-contents: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardImage = styled.img`
  width: 26.5rem;
  margin-bottom: 1.7rem;
`;

export const Menu = styled.h3`
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  border-bottom: 0.3rem solid #d91425;
  padding: 1rem 0;
  margin-top: 0rem;
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: reapeat(1, auto);
  gap: 0.4rem;
  align-items: center;
  justify-contents: center;
  padding-left: 4.5rem;
`;

export const P = styled.p`
  display: inline-block;
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const CardDescription = styled.div`
  margin-top: 2rem;
  white-space: pre-line;
  font-weight: 700;
  font-size: 1.2rem;
  align-items: center;
  justify-contents: center;
  text-align: center;
  padding-bottom: 0.7rem;
`;
