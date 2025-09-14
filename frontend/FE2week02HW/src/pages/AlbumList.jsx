import { useEffect } from "react";
import { useAlbumStore } from "../store/store";
import { MdAdd } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import AlbumCard from "../components/AlbumCard";
import SavedAlbumCard from "../components/SavedAlbumCard";

const AlbumList = () => {
  const albums = useAlbumStore((s) => s.albums);
  const fetchAlbums = useAlbumStore((s) => s.fetchAlbums);
  const savedAlbums = albums.filter((a) => a.saved);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <div>
      {albums.length === 0 ? (
        <p>로딩중</p>
      ) : (
        <div>
          <div>
            <h2>My Album List</h2>
            {savedAlbums.length === 0 ? (
              <p>앨범리스트가 비어있어요! 듣고 싶은 앨범을 선택해주세요</p>
            ) : (
              savedAlbums.map((album) => (
                <SavedAlbumCard key={album.id} album={album} />
              ))
            )}
          </div>
          <div>
            <h2>New Releases</h2>
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumList;
