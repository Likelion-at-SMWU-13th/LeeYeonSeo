import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

type realAlbumData = {
  id: string;
  album_type: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
  images: { url: string }[];
  name: string;
  release_date: string;
};

type Album = {
  id: string;
  albumType: string;
  artists: string;
  externalUrl: string;
  image: string;
  name: string;
  releaseDate: string;
  marked: boolean;
  saved: boolean;
};

type AlbumStore = {
  albums: Album[];
  addAlbum: (id: Album["id"]) => void;
  removeAlbum: (id: Album["id"]) => void;
  toggleAlbum: (id: Album["id"]) => void;
  fetchAlbums: () => Promise<void>;
};

export const useAlbumStore = create(
  devtools((set) => ({
    albums: [],
    fetchAlbums: async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return;
      try {
        const res = await axios.get(
          "https://api.spotify.com/v1/browse/new-releases",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
            params: { limit: 30 },
          }
        );
        const albumItems = res.data?.albums?.items ?? [];
        console.log(albumItems);
        const albumData = albumItems.map((album: realAlbumData) => ({
          id: album?.id,
          albumType: album?.album_type,
          artists: album?.artists?.[0]?.name ?? "",
          externalUrl: album?.external_urls?.spotify,
          image: album?.images?.[0]?.url ?? "",
          name: album?.name,
          releaseDate: album?.release_date,
          marked: false, // 북마크
          saved: false, // 플레이리스트에 저장
        }));
        set({ albums: albumData });
        console.log(albumData);
      } catch (e) {
        console.error(e);
      }
    },
    addAlbum: (id: Album["id"]) =>
      set((state: AlbumStore) => ({
        albums: state.albums.map((album: Album) =>
          album.id === id ? { ...album, saved: true } : album
        ),
      })),
    removeAlbum: (id: Album["id"]) =>
      set((state: AlbumStore) => ({
        albums: state.albums.map((album: Album) =>
          album.id === id ? { ...album, saved: false } : album
        ),
      })),
    toggleAlbum: (id: Album["id"]) =>
      set((state: AlbumStore) => ({
        albums: state.albums.map((album: Album) =>
          album.id === id ? { ...album, marked: !album.marked } : album
        ),
      })),
  }))
);
