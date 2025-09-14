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
      <img src={album.image} />
      <p>{album.name}</p>
      <p>{album.artists}</p>
      <div style={{ display: "flex" }}>
        <div>
          {album.albumType}/{album.releaseDate}/
        </div>
        <a href={album.externalUrl}>바로가기</a>
      </div>
      <FaBookmark
        fill={album.marked ? "#ffa012" : "#e9e9e9"}
        onClick={() => toggleAlbum(album.id)}
      />
      <button onClick={() => removeAlbum(album.id)}>
        <TiDelete />
      </button>
    </div>
  );
}

export default SavedAlbumCard;
