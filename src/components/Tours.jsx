import { useEffect, useState } from "react";
import TourCard from "./TourCard";

const Tours = () => {
  const url = "https://space-toursim-api.onrender.com/tours";
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setTours(data);
  };
  useEffect(() => {
    getTours();
  }, []);

  return (
    <>
      <div
        className="flex flex-wrap items-center justify-center w-[90%]"
        id="tours-div"
      >
        {tours.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
      </div>
    </>
  );
};
export default Tours;
