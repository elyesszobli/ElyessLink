import LogoutButton from "./LogoutButton";

function Header() {
  return (
    <header className=" bg-sky-500 w-screen h-14">
      <div className="p-2 flex flex-row items-center  justify-between">
        <div>
            <a href="/home" className="font-Oswald text-white text-2xl">ElyessLink</a>
        </div>
        <input type="text" />
        <ul>
            <li></li>
        </ul>

         <LogoutButton /> 
      </div>
    </header>
  );
}

export default Header;
