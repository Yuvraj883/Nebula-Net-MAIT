import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoRocket } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 md:px-8 items-center h-16">
      <div className="flex items-center">
        <span className="text-lg md:text-xl font-bold text-white">ExpoCosmo</span>
        <IoRocket className="text-white text-lg md:text-xl ml-1" />
      </div>
      <ul className="hidden md:flex space-x-4 font-semibold">
        <li>
          <Link to="/Home" className="text-gray-600 hover:text-white ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-gray-600 hover:text-white">
            About
          </Link>
        </li>
        <li>
          <Link to="/Travel" className="text-gray-600 hover:text-white">
            Travel
          </Link>
        </li>
        <li>
          <Link to="/Destinations" className="text-gray-600 hover:text-white">
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/Space" className="text-gray-600 hover:text-white">
            Space
          </Link>
        </li>
      </ul>
      <div className="flex items-center mt-2 bg-gray-100 md:w-[20%] w-[40%] px-4 py-2 rounded-r-full rounded-l-full "> {/* Mobile Search Bar */}
        <FaSearchLocation className="text-gray-600 ml-auto" />
      </div>
    </div>
  );
};

export default Navbar;
