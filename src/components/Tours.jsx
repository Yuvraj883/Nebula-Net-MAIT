import { useEffect, useState } from "react";
import TourCard from "./TourCard";
import Navbar from "./Navbar";

const Tours = ()=>{
  const url = 'https://space-toursim-api.onrender.com/tours';
  const [tours, setTours] = useState([]);
  const getTours = async()=>{
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setTours(data);
  }
  useEffect(()=>{
    getTours();
  },[]);

  return(
    <>

    <h1 className="text-center text-4xl font-bold mt-8 ">Tours</h1>
    <div className="flex flex-wrap items-center justify-center w-[90%]">
      {
        tours.map((tour)=>(
          <TourCard tour={tour} key={tour.id}/>
        ))
      }

    </div>

    </>
  )
}
export default Tours;
