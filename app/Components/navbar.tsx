import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import logo from "../Components/logo.jpg";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/About", label: "About" },
    { to: "/Services", label: "Services" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <header className="w-full px-8 text-gray-700 bg-white shadow-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center mb-5 md:mb-0">
            <motion.img
              src={logo}
              alt="Steve Does Bikes"
              className="h-24 md:h-20 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </NavLink>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8 space-x-6">
            {links.map(({ to, label, end }) => {
              const isActive = location.pathname === to;

              return (
                <motion.div
                  key={to}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <NavLink
                    to={to}
                    end={end}
                    className={`font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-600 hover:text-indigo-500"
                    }`}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              );
            })}
          </nav>

        </div>
      </div>
    </header>
  );
}