import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChecker = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('https://localhost:7264/Auth/check-auth', {
          credentials: 'include', 
        });
        const data = await response.json();

        if (data.isLoggedIn) {
          navigate('/');
        } 
        // else {
        //   navigate('/login');
        // }
      } catch (error) {
        console.error('Error checking authentication:', error);
        
      }
    };

    checkAuth();
  }, [navigate]);

  return children;
};

export default AuthChecker;
