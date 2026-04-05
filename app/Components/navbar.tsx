import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import logo from "../Components/logo.jpg";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/Services", label: "Services" },
    { to: "/About", label: "About" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <header className="w-full px-4 sm:px-6 md:px-8 absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 sm:py-5">
        
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to="/" className="flex items-center mb-4 md:mb-0">
            <motion.img
              src={logo}
              alt="Steve Does Bikes"
              className="h-16 sm:h-20 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </NavLink>

          <nav className="flex flex-wrap justify-center items-center ml-0 md:ml-8 md:pl-8 gap-x-4 sm:gap-x-6 gap-y-2">
            {links.map(({ to, label, end }) => {
              const isActive = location.pathname === to;

              return (
                <motion.div
                  key={to}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <NavLink
                    to={to}
                    end={end}
                    className="font-medium text-base sm:text-lg text-black hover:text-yellow-400 transition-colors duration-300"
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