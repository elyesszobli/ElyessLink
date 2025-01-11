const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch('https://localhost:7264/Auth', {
                credentials: 'include',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            window.location.reload();

        } catch (error) {
            console.error('Error deleting token:', error);
        }
    };

    return (
        <button onClick={handleLogout} className='bg-white m-2 pr-2 pl-2 p-0.5 rounded-xl' type="button">
            Déconnexion
        </button>
    );
};

export default LogoutButton;
