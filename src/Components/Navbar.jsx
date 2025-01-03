const Navbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="Navbar flex flex-wrap items-center justify-between shadow-2xl px-4 py-3 bg-white">
      <div className="logo flex items-center justify-center w-full md:w-2/5">
        <img className="h-14 mt-2.5" src="portfolio.png" alt="Logo" />
      </div>

      <div className="navbar-items flex flex-wrap space-x-6 md:space-x-14 w-full md:w-3/5 justify-center md:mt-0">
        <div>
          <a
            href="#"
            onClick={() => setSelectedTab("Home")}
            className={`text-black font-bold no-underline hover:text-blue-600 hover:underline hover:decoration-2 hover:underline-offset-4 ${
              selectedTab === "Home" ? "text-red-500" : ""
            }`}
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="#"
            onClick={() => setSelectedTab("About")}
            className={`text-black font-bold no-underline hover:text-blue-600 hover:underline hover:decoration-2 hover:underline-offset-4 ${
              selectedTab === "About" ? "text-green-500" : ""
            }`}
          >
            About
          </a>
        </div>
        <div>
          <a
            href="#"
            onClick={() => setSelectedTab("Skills")}
            className={`text-black font-bold no-underline hover:text-blue-600 hover:underline hover:decoration-2 hover:underline-offset-4 ${
              selectedTab === "Skills" ? "text-blue-500" : ""
            }`}
          >
            Skills
          </a>
        </div>
        <div>
          <a
            href="#"
            onClick={() => setSelectedTab("Education")}
            className={`text-black font-bold no-underline hover:text-blue-600 hover:underline hover:decoration-2 hover:underline-offset-4 ${
              selectedTab === "Education" ? "text-purple-500" : ""
            }`}
          >
            Education
          </a>
        </div>
        <div>
          <a
            href="#"
            onClick={() => setSelectedTab("Work")}
            className={`text-black font-bold no-underline hover:text-blue-600 hover:underline hover:decoration-2 hover:underline-offset-4 ${
              selectedTab === "Work" ? "text-orange-500" : ""
            }`}
          >
            Work
          </a>
        </div>
        <div>
          <a
            href="#"
            onClick={() => setSelectedTab("Experience")}
            className={`text-black font-bold no-underline hover:text-blue-600 hover:underline hover:decoration-2 hover:underline-offset-4 ${
              selectedTab === "Experience" ? "text-pink-500" : ""
            }`}
          >
            Experience
          </a>
        </div>
        <div>
          <a
            href="#"
            onClick={() => setSelectedTab("Contact")}
            className={`text-black font-bold no-underline hover:text-blue-600 hover:underline hover:decoration-2 hover:underline-offset-4 ${
              selectedTab === "Contact" ? "text-yellow-500" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
