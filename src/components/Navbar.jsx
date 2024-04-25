import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoRocket } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 items-center h-16">
      <div className="flex items-center">
        <span className="text-xl font-bold text-white">ExpoCosmo</span>
        {/* <img src="./images/rocket.png" alt="icon" className="h-8 mt-2" /> */}
        <IoRocket className="text-white text-2xl ml-1" />

      </div>
      <ul className="flex space-x-4 ">
        <li>
          <Link to="/Home" className="text-gray-600 hover:text-white">
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
      <div className="w-60 h-12 mt-2 bg-gray-100 flex  items-center rounded-l-full rounded-r-full px-4 py-2">
        <FaSearchLocation className="ml-auto" />
      </div>
    </div>
  );
};

export default Navbar;
