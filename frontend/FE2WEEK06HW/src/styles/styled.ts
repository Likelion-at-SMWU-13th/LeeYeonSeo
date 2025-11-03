import styled, { createGlobalStyle } from "styled-components";

/* 전역 스타일 및 폰트 */
export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
      "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
    background: #f5f7fb;
    color: #182230;
  }
`;

export const Page = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

export const Empty = styled.p`
  color: #8b95a1;
  padding: 14px 8px;
`;

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const Img = styled.img`
  border-radius: 20px;
  width: 300px;
  display: block;
`;

export const Img2 = styled.img`
  border-radius: 20px;
  width: 130px;
  display: block;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SavedGrid = styled.div`
  display: flex;
  gap: 20px;
`;

export const Name = styled.h1`
  color: #3e3e3eff;
  font-size: 1.5rem;
`;

export const Artist = styled.span`
  color: #7e7e7eff;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.75rem;
`;

export const Description = styled.p`
  color: #838383ff;
  font-size: 0.75rem;
  margin-top: -4px;
`;

export const CardBottomWrapper = styled.div`
  margin-top: -7px;
  display: flex;
  justify-content: space-between;
  gap: 4.5rem;
`;

export const CardWrapper1 = styled.div`
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  background-color: #ffffff;
`;

export const A = styled.a`
  color: #1fba00ff;
  text-decoration: none;
`;

export const SavedName = styled.h3`
  color: #3e3e3eff;
  font-size: 0.75rem;
  margin-right: 10px;
  margin-bottom: 0px;
`;

export const SavedArtist = styled.h5`
  color: #7e7e7eff;
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 5px;
`;
