import axios from "axios";
import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthHandler = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const Host = "http://localhost:5000";
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      if (token) {
        const userDetails = await GetUserDetails();
        setUser(userDetails);
      }
    }
    fetchUser();
    // eslint-disable-next-line
  }, [token]);

  // Get User Details
  const GetUserDetails = async () => {
    const Host = "http://localhost:5000";
    try {
      const response = await axios.get(`${Host}/api/auth/getuser`, {
        headers: {
          "auth-token": token,
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        return {};
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Login
  const login = async (cred) => {
    try {
      const response = await axios.post(`${Host}/api/auth/login`, cred);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.authtoken);
        setToken(response.data.authtoken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Signup
  const signup = async (data) => {
    try {
      const response = await axios.post(`${Host}/api/auth/createuser`, data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.authtoken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ login, signup, logout, token, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthHandler;
