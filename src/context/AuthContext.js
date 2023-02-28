import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const { isLoading, token, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ isLoading, login: handleLogin, token, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
