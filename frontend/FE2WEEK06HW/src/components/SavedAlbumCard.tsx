import { useAlbumStore } from "../store/store.ts";
import * as S from "../styles/styled.ts";
import { TiDelete } from "react-icons/ti";
import { FaBookmark } from "react-icons/fa";

function SavedAlbumCard({ album }) {
  const removeAlbum = useAlbumStore((s) => s.removeAlbum);
  const toggleAlbum = useAlbumStore((s) => s.toggleAlbum);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <S.ImgWrapper>
        <S.Img2 src={album.image} />
        <S.Button onClick={() => removeAlbum(album.id)}>
          <TiDelete size="18px" fill="#fe6969" />
        </S.Button>
      </S.ImgWrapper>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <S.SavedName>{album.name} </S.SavedName>
          <FaBookmark
            fill={album.marked ? "#ffa012" : "#e9e9e9"}
            onClick={() => toggleAlbum(album.id)}
            style={{ marginTop: "10px" }}
          />
        </div>
        <S.SavedArtist>{album.artists} </S.SavedArtist>
        <div style={{ display: "flex", flex: "row" }}>
          <S.Description>
            {album.albumType} · {album.releaseDate} ·{" "}
          </S.Description>
        </div>
        <S.Description style={{ marginTop: "-10px" }}>
          <S.A href={album.externalUrl}>go to Spotify</S.A>
        </S.Description>
      </div>
    </div>
  );
}

export default SavedAlbumCard;
