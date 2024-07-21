import { Link } from "react-router-dom";
import favicon from "/favicon.png";
import { Navbar } from "flowbite-react";
import Sidebar from "./Sidebar.jsx";
import { useState } from "react";

export default function () {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="absolute nav-header w-full z-10 top-0 start-0 select-none">
      <Navbar fluid className="main-nav bg-theme-blue bg-opacity-0">
        <Navbar.Brand
          className="text-theme-white tracking-wider"
          as={Link}
          to="/"
        >
          <img src={favicon} className="mr-3 h-6 sm:h-9" alt="Ceraworld" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-theme-white">
            Ceraworld
          </span>
        </Navbar.Brand>
        <span
          className="text-4xl text-theme-white"
          role="button"
          onClick={(_) => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          ☰
        </span>
      </Navbar>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </header>
  );
}
