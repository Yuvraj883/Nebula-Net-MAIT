import Navbar from "./Navbar";
import { IoRocket } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('./images/Hero.jpeg')` }}
    >
      <Navbar />

      {/* Your content inside the Hero component */}
      <div className="container mx-auto px-4 py-12 text-white flex flex-col mt-[6%] items-center   lg:w-2/3">
        <div className="flex items-center mb-6">
          <h1 className="text-4xl lg:text-5xl font-bold mr-1 lg:mr-4">Welcome to ExpoCosmo</h1>
          <IoRocket className="text-6xl lg:text-6xl" />
        </div>
        <p className="text-lg lg:text-xl text-center font-semibold mb-8">
          Explore the cosmos with us and embark on exciting space adventures!
        </p>
        <button className="bg-white hover:bg-black hover:text-white text-black px-8 font-semibold py-3 rounded-md w-full lg:w-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
