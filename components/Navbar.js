// components/Navbar.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "MY WORKS", path: "/works" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT ME", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-40 bg-gray-900">
      <div className="text-white text-2xl font-bold">aPiLar</div>
      <div className="hidden md:flex space-x-8 relative">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}
              className={`relative text-white font-bold transition-colors duration-300 hover:text-blue-400 ${
                router.pathname === item.path ? "text-blue-400" : ""
              }`}
            >
              {item.name}
           
          </Link>
        ))}
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden">
  <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
    {!menuOpen && (
      <>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </>
    )}
  </button>
</div>
{menuOpen && (
  <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center md:hidden z-50">
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-4 right-4 text-white font-bold text-2xl"
    >
      X
    </button>
    {navItems.map((item) => (
      <Link key={item.path} href={item.path}
          className="block text-white font-bold text-2xl py-4"
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
      </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
