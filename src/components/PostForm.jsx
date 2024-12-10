
function PostForm() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6">
          <div className="flex  flex-col items-center mb-4">
            <div className="bg-white size-9 rounded-full">
                {/* <img src="public/assets/profil-img/profil_img_default.png"/> */}
            </div>
            <p className="text-white">Username</p>
          </div>
          <textarea name="" id="" className="bg-gray-800 w-80 m-2 outline-none focus:text-white" placeholder="Hello everyone"></textarea>
          <button className="bg-sky-500 m-2 pr-2 pl-2 p-0.5 rounded-xl">Poster</button>
        </form>
      </div>
    </div>
  )
}

export default PostForm
