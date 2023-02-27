import { useState } from "react";
import axiosClient from "../apis";

export default function useAuth({ onSuccess }) {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading((prev) => !prev);
    const resp = await axiosClient.post("/v2/oauth2/token", {
      grant_type: "client_credentials",
      client_id: "v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ",
      client_secret: "91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H",
    });
    setIsLoading((prev) => !prev);
    setToken(resp);
    onSuccess();
  };

  return { isLoading, token, handleLogin };
}
