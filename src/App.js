import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import TourCard from "./components/TourCard";


function App() {
  return (
    <>
    <Hero/>
    <div className="flex flex-wrap">
    <TourCard/>
    <TourCard/>
    <TourCard/>

    </div>
    </>
  );
}

export default App;
