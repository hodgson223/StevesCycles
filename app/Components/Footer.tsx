import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">
        
        {/* Text */}
        <p className="text-gray-400 text-sm tracking-wide">
          © {new Date().getFullYear()} Steve Does Bikes
        </p>

        {/* Icons */}
        <div className="flex space-x-6">
          
          <a
            href="https://www.facebook.com/profile.php?id=100014962874854&locale=en_GB"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:text-yellow-400"
          >
            <FaFacebook className="w-7 h-7" />
          </a>

          <a
            href="https://www.instagram.com/s.jones820/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:text-yellow-400"
          >
            <FaInstagram className="w-7 h-7" />
          </a>

        </div>

      </div>
    </footer>
  );
}