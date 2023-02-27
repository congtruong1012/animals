import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const nav = useNavigate();
  const { isLoading, token, handleLogin } = useAuth({
    onSuccess: () => nav("/"),
  });

  return (
    <AuthContext.Provider value={{ isLoading, login: handleLogin, token }}>
      {children}
    </AuthContext.Provider>
  );
}
