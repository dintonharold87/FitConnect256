import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-black shadow fixed top-0 left-0 right-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h1 className="text-2xl font-bold font-heading text-white">
                <span className="text-primary">Fit</span>Connect
                <span className="text-primary">256</span>
              </h1>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white text-base font-body capitalize hover:text-primary">
                <a href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </a>
              </li>
              <li className="text-white text-base capitalize font-body hover:text-primary">
                <a href="#about" onClick={() => setNavbar(!navbar)}>
                  About Us
                </a>
              </li>
              <li className="text-white text-base capitalize font-body hover:text-primary">
                <a href="#faqs" onClick={() => setNavbar(!navbar)}>
                  Faqs
                </a>
              </li>
              <li className="text-white text-base capitalize font-body hover:text-primary">
                <a href="#" onClick={() => setNavbar(!navbar)}>
                  Coaches
                </a>
              </li>
              <li className="text-white text-base capitalize font-body hover:text-primary">
                <a href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact US
                </a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="#"
                className="inline-block w-max px-4 py-2 mr-4 text-center text-black text-sm bg-primary rounded-lg shadow font-semibold"
              >
                Login
              </a>
              <a
                href="#"
                className="inline-block w-fit px-4 py-2 text-center text-sm text-primary bg-secondary-100 rounded-lg shadow border border-primary font-semibold "
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-6 lg:inline-block">
          <a
            href="#"
            className="px-4 py-2 text-black text-sm bg-primary rounded-lg shadow hover:bg-secondary-100 hover:text-primary font-semibold font-body"
          >
            Login
          </a>
          <a
            href="#"
            className="px-4 py-2 text-center text-sm text-primary bg-secondary-100 rounded-lg shadow border border-primary font-semibold font-body"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
