

const Logout = (setIsAuthenticated, setIsDropdownOpen) => {
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken'); // Remove token on logout
    setIsDropdownOpen(false);
    window.location.reload();
  };
  
  export default Logout;
  