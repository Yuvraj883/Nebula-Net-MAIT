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
      <div className="container mx-auto px-4 py-12 text-white flex flex-col mt-32 items-center justify-center w-[40%]">
<div className="flex ">
<h1 className="text-4xl font-bold mb-4">Welcome to ExpoCosmo </h1>
<IoRocket className="text-white text-6xl ml-1" />

  </div>
        <p className="text-lg text-white font-semibold">
          Explore the cosmos with us and embark on exciting space adventures!
        </p>
        <button className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 mt-4 w-[40%] rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
