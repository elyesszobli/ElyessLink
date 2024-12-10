import LogoutButton from "./LogoutButton";

function Header() {
  return (
    <header className=" bg-sky-500 w-screen h-16 box-border fixed ">
      <div className="p-2 flex flex-row items-center  justify-between">
        <div>
            <a href="/home" className="font-Oswald text-white text-2xl">ElyessLink</a>
        </div>
        <div className="flex justify-center">
          <input type="text" className="rounded-l-xl w-64 h-8 pl-2 outline-none" />
          <button className="bg-white rounded-r-xl pr-2 h-8">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <ul className="flex flex-row">
            <li><i className="fa-solid fa-message mr-7" style={{ color: "white" }}></i></li>
            <li><i className="fa-solid fa-bell mr-7" style={{ color: "white" }}></i></li>
            <li><i className="fa-solid fa-user-plus mr-7" style={{ color: "white" }}></i></li>
        </ul>

         <LogoutButton /> 
      </div>
    </header>
  );
}

export default Header;
