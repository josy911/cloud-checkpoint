const NavBar = () => {
  return (
    <>
      <div className="flex p-5 items-center justify-center sm:justify-around mx-auto sticky z-20 ">
        {/* nav bar logo */}
        <img
          src="https://th.bing.com/th/id/OIP.MBequCkmTWsmsIHTzrVUDwHaE7?rs=1&pid=ImgDetMain"
          alt="logo"
          width="200"
          height="auto" // Maintains aspect ratio
        />

        {/* navbar link items */}
        <div className="font-light text-xl">
          <ul className="hidden sm:inline-flex gap-8">
            <li
              href="#"
              className="cursor-pointer hover:text-red-500 hover:font-bold transition-all"
            >
              Home
            </li>
            <li
              href="#"
              className="cursor-pointer hover:text-red-500 hover:font-bold transition-all"
            >
              Properties
            </li>
            <li
              href="#"
              className="cursor-pointer hover:text-red-500 hover:font-bold transition-all"
            >
              Explore
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
