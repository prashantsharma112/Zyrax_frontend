
  

import { useEffect } from "react";

const Logout = ({ setIsAuthenticated }) => {
  useEffect(() => {
    localStorage.removeItem("accessToken");

    setIsAuthenticated(false);

    if (window.close) {
      window.close();
    }

    window.location.href = "/";
  }, []);

  return null; // No UI needed
};

export default Logout;
