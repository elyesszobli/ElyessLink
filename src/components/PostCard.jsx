import React from 'react';
import { useState } from 'react';

function PostCard({ username, content, image , LikeCount }) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-6 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-white size-9 rounded-full">
            {/* <img src="public/assets/profil-img/profil_img_default.png"/> */}
          </div>
          <p className="text-white">{username}</p>
        </div>
        <div>
          <p className="text-white text-center">
            {content}
          </p>
          {image && (
            <img src={`https://localhost:7264${image}`} alt="Post" className="mt-4" />
          )}
        </div>
        <div>
          <div>
            <i
              className={`fa-solid fa-heart text-2xl m-2 cursor-pointer ${liked ? 'text-sky-500' : 'text-white'}`}
              onClick={handleClick}
            ></i>
            <p className='text-white'>{LikeCount}</p>
          </div>
          <i className="fa-solid fa-comment text-2xl m-2 cursor-pointer text-white"></i>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
