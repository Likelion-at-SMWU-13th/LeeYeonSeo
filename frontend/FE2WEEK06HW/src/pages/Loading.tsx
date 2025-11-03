import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;
  const grant_type = "client_credentials";

  const navigate = useNavigate();

  useEffect(() => {
    const requestAuthorization = async () => {
      try {
        const res = await axios.post(
          `https://accounts.spotify.com/api/token`,
          {
            grant_type: grant_type,
            client_id: client_id,
            client_secret: client_secret,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(res.data);
        localStorage.setItem("accessToken", res?.data?.access_token ?? "");
        console.log(localStorage.getItem("accessToken"));
        navigate("/musicList");
      } catch (e) {
        console.log(e);
      }
    };
    requestAuthorization();
  }, []);

  return <div>Loading…</div>;
};

export default Loading;
