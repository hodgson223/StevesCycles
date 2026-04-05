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
    <header className="w-full px-8 absolute top-0 left-0 z-50 bg-transparent text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to="/" className="flex items-center mb-5 md:mb-0">
            <motion.img
              src={logo}
              alt="Steve Does Bikes"
              className="h-20 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </NavLink>

          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:pl-8 space-x-6">
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
                    className={`font-medium text-lg transition-colors duration-300 ${
                       isActive
                         ? "text-black hover:text-yellow-400"
                         : "text-black hover:text-yellow-400"
                    }`}
                                      >
                    {label}
                  </NavLink>
                </motion.div>
              );
            })}
          </nav>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 md:mt-0 px-5 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-300 transition"
        >
          Get a Quote
        </motion.button>
      </div>
    </header>
  );
}