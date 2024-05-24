import React, { useState, useEffect } from "react";
import "../styles/Listing.css";

const Listing = ({ Name, Alter, Menge, imageURL, initialTime }) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialTime]);

  return (
    <div className="listing-item">
      <h2>{Name}</h2>
      <p>Alter: {Alter}</p>
      <p>Menge: {Menge}</p>
      <p>Verbleibende Zeit: {timer} Sekunden</p>
      <img src={imageURL} alt={Name} className="katzenbild" />
      <button type="button" className="btn">
        Kauf Mich
      </button>
    </div>
  );
};

export default Listing;
