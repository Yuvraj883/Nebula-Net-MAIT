import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css"; // Import carousel styles (for example)

const TourInfo = () => {
  const { id } = useParams();
  const url = `https://space-toursim-api.onrender.com/tours/${id}`;
  const [details, setDetails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getDetails = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setDetails(data);
    } catch (error) {
      console.error("Error fetching tour details:", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % details.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + details.images.length) % details.images.length);
  };

  return (
    <div className="carousel-container">
      {details?.images?.length > 0 && (
        <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {details.images.map((image, index) => (
            <img className="h-70%" key={index} src={image} alt={`carousel-${index}`} />
          ))}
        </div>
      )}

      {/* <div className="carousel-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div> */}
    </div>
  );
};

export default TourInfo;
