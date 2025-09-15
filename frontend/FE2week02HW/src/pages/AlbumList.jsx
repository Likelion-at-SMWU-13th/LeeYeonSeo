import { useEffect } from "react";
import { useAlbumStore } from "../store/store";
import AlbumCard from "../components/AlbumCard";
import SavedAlbumCard from "../components/SavedAlbumCard";
import * as S from "../styles/styled";

const AlbumList = () => {
  const albums = useAlbumStore((s) => s.albums);
  const fetchAlbums = useAlbumStore((s) => s.fetchAlbums);
  const savedAlbums = albums.filter((a) => a.saved);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <div>
      <S.GlobalStyle />
      <S.Page>
        {albums.length === 0 ? (
          <p>로딩중</p>
        ) : (
          <div>
            <div>
              <h2>My Album List</h2>
              {savedAlbums.length === 0 ? (
                <S.Empty>
                  앨범리스트가 비어있어요! 듣고 싶은 앨범을 선택해주세요
                </S.Empty>
              ) : (
                <S.SavedGrid>
                  {savedAlbums.map((album) => (
                    <SavedAlbumCard key={album.id} album={album} />
                  ))}
                </S.SavedGrid>
              )}
            </div>
            <div>
              <h2>New Releases</h2>
              <S.AlbumGrid>
                {albums.map((album) => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </S.AlbumGrid>
            </div>
          </div>
        )}
      </S.Page>
    </div>
  );
};

export default AlbumList;
