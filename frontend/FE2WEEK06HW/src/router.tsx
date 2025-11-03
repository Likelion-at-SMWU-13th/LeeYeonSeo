import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MusicList from "./pages/AlbumList.jsx";
import Loading from "./pages/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Loading />,
      },
      {
        path: "/musicList",
        element: <MusicList />,
      },
    ],
  },
]);

export default router;
