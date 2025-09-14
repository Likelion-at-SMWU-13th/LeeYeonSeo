import { create } from "zustand";
import axios from "axios";

export const useAlbumStore = create((set) => ({
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
      const albumData = albumItems.map((album) => ({
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
  addAlbum: (id) =>
    set((state) => ({
      albums: state.albums.map((album) =>
        album.id === id ? { ...album, saved: true } : album
      ),
    })),
  removeAlbum: (id) =>
    set((state) => ({
      albums: state.albums.map((album) =>
        album.id === id ? { ...album, saved: false } : album
      ),
    })),
  toggleAlbum: (id) =>
    set((state) => ({
      albums: state.albums.map((album) =>
        album.id === id ? { ...album, marked: !album.marked } : album
      ),
    })),
}));
