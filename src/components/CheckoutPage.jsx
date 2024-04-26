
import { Link } from 'react-router-dom';
import { TbTrekking } from 'react-icons/tb';
import { ImRocket } from 'react-icons/im';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CheckoutPage = ({ tour }) => {
  // Destructure tour object
  const { id } = useParams();
  const url = `https://space-toursim-api.onrender.com/tours/${id}`;
  const [details, setDetails] = useState([]);

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


  return (
    <div className="checkout-container">
      <div className="tour-images">
        {/* Display tour images in a carousel or gallery */}
        {details?.map((image, index) => (
          <img key={index} src={image} alt={`tour-image-${index}`} className="tour-image" />
        ))}
      </div>

      <div className="tour-details">
        <h1 className="text-2xl font-bold mb-4">{details?.name}</h1>

        <div className="activity-info mb-4">
          <span className="flex items-center font-semibold">
            <TbTrekking className="text-xl mr-2" />
            5+ activities
          </span>
          <span className="flex items-center font-semibold">
            <ImRocket className="text-xl mr-2" />
            3 flights
          </span>
          <span className="font-semibold text-sm">3D - 2N</span>
        </div>

        <p className="text-gray-800 text-sm mb-4">{details?.description}</p>

        {/* Placeholder for additional checkout form or summary */}
        <div className="checkout-form">
          {/* Example form fields */}
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          {/* Add more form fields as needed */}

          {/* Proceed to payment button */}
          <button className="bg-black text-white font-semibold px-4 py-2 rounded-md w-full hover:bg-white hover:text-black border border-black transition duration-300">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
