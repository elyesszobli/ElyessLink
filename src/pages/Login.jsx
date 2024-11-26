import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password:''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7264/Auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Erreur de réseau ou de serveur');
      }
      else{
        console.log("utilisateur bien connecter");

      }
  
      const data = await response.json();
      console.log(data);
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête POST:', error);
    }
  };


  return (
    <section className="h-screen bg-sky-500">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-4xl font-Oswald text-white">
          ElyessLink
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connexion
            </h2>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email} onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password} onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-500 hover:bg-white hover:text-sky-500"
              >
                Se connecter
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous n avez pas encore de compte ? 
                <a
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-sky-500 hover:text-white"
                >
                   S inscrire
                </a>
              
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
