import { useState } from "react";
import { signup, login } from "../api/auth";

export default function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await signup(username, password);
      setToken(res.access_token);
      localStorage.setItem("token", res.access_token);
    } catch (err) {
      setError(err.response?.data?.detail || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await login(username, password);
      setToken(res.access_token);
      localStorage.setItem("token", res.access_token);
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return { token, loading, error, handleSignup, handleLogin, logout };
}
