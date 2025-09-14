import React from "react";
import { useAlbumStore } from "../store/store";
import * as S from "../styles/styled";
import { TiDelete } from "react-icons/ti";
import { FaBookmark } from "react-icons/fa";

function SavedAlbumCard({ album }) {
  const removeAlbum = useAlbumStore((s) => s.removeAlbum);
  const toggleAlbum = useAlbumStore((s) => s.toggleAlbum);

  return (
    <div>
      <S.ImgWrapper>
        <S.Img2 src={album.image} />
        <S.Button onClick={() => removeAlbum(album.id)}>
          <TiDelete size="18px" fill="#fe6969" />
        </S.Button>
      </S.ImgWrapper>
      <p>{album.name}</p>
      <p>{album.artists}</p>
      <div style={{ display: "flex", flex: "row" }}>
        <div>
          {album.albumType}/{album.releaseDate}/
        </div>
        <a href={album.externalUrl}>바로가기</a>
        <div>
          <FaBookmark
            fill={album.marked ? "#ffa012" : "#e9e9e9"}
            onClick={() => toggleAlbum(album.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default SavedAlbumCard;
