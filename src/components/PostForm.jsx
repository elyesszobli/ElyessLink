import { useState } from "react";

function PostForm() {
  const [formData, setFormData] = useState({
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data being sent:", formData); // Log the form data

      const response = await fetch(`https://localhost:7264/Post?Content=${formData.content}`, {
        credentials:'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erreur de réseau ou de serveur:', errorData);
        throw new Error('Erreur de réseau ou de serveur');
      }

      const data = await response.json();
      console.log("Response data:", data); // Log the response data

    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête POST:', error);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-4">
            <div className="bg-white size-9 rounded-full">
              {/* <img src="public/assets/profil-img/profil_img_default.png"/> */}
            </div>
            <p className="text-white">Username</p>
          </div>
          <textarea
            name="content"
            id="content"
            className="bg-gray-800 w-80 m-2 outline-none focus:text-white"
            placeholder="Hello everyone"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="bg-sky-500 m-2 pr-2 pl-2 p-0.5 rounded-xl">
            Poster
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
