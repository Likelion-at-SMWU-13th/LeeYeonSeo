import { useAlbumStore } from "../store/store.ts";
import * as S from "../styles/styled.ts";
import { FaBookmark } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import type { album } from "./SavedAlbumCard.tsx";

function AlbumCard({ album }: album) {
  const addAlbum = useAlbumStore((s) => s.addAlbum);
  const toggleAlbum = useAlbumStore((s) => s.toggleAlbum);

  return (
    <S.CardWrapper1>
      <S.ImgWrapper>
        <S.Img src={album.image} />
        <S.Button onClick={() => addAlbum(album.id)}>
          <MdAdd fill="#ffffff" size="30px" />
        </S.Button>
      </S.ImgWrapper>
      <S.Name>
        {album.name} <S.Artist>{album.artists}</S.Artist>
      </S.Name>
      <S.CardBottomWrapper
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <S.Description>
          {album.albumType} · {album.releaseDate} ·{" "}
          <S.A href={album.externalUrl}>go to Spotify</S.A>
        </S.Description>
        <div>
          <FaBookmark
            size="25px"
            fill={album.marked ? "#ffa012" : "#e9e9e9"}
            onClick={() => toggleAlbum(album.id)}
          />
        </div>
      </S.CardBottomWrapper>
    </S.CardWrapper1>
  );
}

export default AlbumCard;
