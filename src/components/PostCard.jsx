function PostCard() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-6 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="flex  flex-col items-center mb-4">
          <div className="bg-white size-9 rounded-full">
            {/* <img src="public/assets/profil-img/profil_img_default.png"/> */}
          </div>
          <p className="text-white">Username</p>
        </div>
        <div>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit illum
            error sunt hic voluptatum dolorem veritatis sapiente, nemo est, natus
            eligendi rerum rem voluptatibus ex nesciunt officiis laborum modi quia
            neque libero tenetur quaerat temporibus recusandae quasi? Mollitia
            explicabo dignissimos dolores! Dolore obcaecati quia excepturi nobis.
            Amet sapiente fugit velit?
          </p>
        </div>
        <div>
          <i className="fa-solid fa-heart text-2xl m-2 cursor-pointer" style={{ color: "white" }}></i>
          <i className="fa-solid fa-comment text-2xl m-2 cursor-pointer" style={{ color: "white" }}></i>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
