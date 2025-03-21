import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children, openLoginModal }) => {
  if (!isAuthenticated) {
    openLoginModal(); // Open the login modal if the user is not authenticated
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
