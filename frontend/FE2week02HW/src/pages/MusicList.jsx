import axios from "axios";
import { useEffect, useState } from "react";

const MusicPage = () => {
  const [newReleaseAlbums, setNewReleaseAlbums] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;
    const getNewReleases = async () => {
      try {
        const res = await axios.get(
          "https://api.spotify.com/v1/browse/new-releases",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
            params: { limit: 30 },
          }
        );
        const albumItems = res.data?.albums?.items ?? [];
        const albumData = albumItems.map((album) => ({
          albumType: album?.album_type,
          artists: album?.artists?.[0]?.name ?? "",
          externalUrl: album?.external_urls?.spotify,
          image: album?.images?.[0]?.url ?? "",
          name: album?.name,
          releaseDate: album?.release_date,
        }));
        console.log(albumData);
        setNewReleaseAlbums(albumData);
      } catch (e) {
        console.error(e);
      }
    };
    getNewReleases();
  }, []);

  return (
    <div>
      <h2>New Releases</h2>
      {newReleaseAlbums.length === 0 ? (
        <p>로딩중</p>
      ) : (
        <div>
          {newReleaseAlbums.map((album, index) => (
            <div key={index}>
              {album.image && <img src={album.image} />}
              <p>{album.name}</p>
              <p>{album.artists}</p>
              <div style={{ display: "flex" }}>
                <div>
                  {album.albumType}/{album.releaseDate}/
                </div>
                <a href={album.externalUrl}>바로가기</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPage;
