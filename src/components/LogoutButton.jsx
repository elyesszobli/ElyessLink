import { useNavigate } from 'react-router-dom';

function LogoutButton() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

  return (
    <button onClick={ handleLogout } className='bg-white m-2'>
        Déconnexion
    </button>
  )
}

export default LogoutButton
