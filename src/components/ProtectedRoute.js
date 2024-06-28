import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Authentication_Loading from './Authentication_Loading';

const authenticatePost = async () => {
  try {
    const response = await axios.post("https://hbgyken5c2.execute-api.eu-north-1.amazonaws.com/hillel", {
      action: 'authenticate',
    }, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    let message;
    if (error.response?.data?.message && typeof error.response.data.message === 'string') {
      message = error.response.data.message;
    } else if (error.response?.data && typeof error.response.data === 'string') {
      message = error.response.data;
    } else {
      message = "Something went wrong.";
    }
    throw new Error(message);
  }
};

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authStatusChecked, setAuthStatusChecked] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const data = await authenticatePost();
        setIsAuthenticated(true);

      } catch (error) {
        console.error(error.message || "An error occurred");
        setIsAuthenticated(false);
      } finally {
        setAuthStatusChecked(true);
      }
    };
    authenticate();
  }, []);

  if (!authStatusChecked) {
    return <Authentication_Loading />;
  }

  return isAuthenticated ? children : <Navigate to="/" state={{ message: location.state?.no_failure_message ? false : (location.state?.custom_failure_message ? location.state.custom_failure_message : 'Authentication failed, please log in.') }} />;
}
