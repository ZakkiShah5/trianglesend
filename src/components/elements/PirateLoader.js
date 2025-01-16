import React from "react";
import loaderimg from '../../assets/icons/wheel.png';
import './Header.css';

const PirateLoader = ({ pageName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      {/* Rotating Pirate Wheel */}
      <div className="pirate-wheel">
        <div className="flex items-center justify-center">
          <img
            src={loaderimg}
            alt="Loading Wheel"
            className="animate-spin w-16 h-16 md:w-24 md:h-24"
          />
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-lg md:text-2xl font-pirate font-semibold text-secondary mt-4">
        Loading the {pageName}...
      </div>
    </div>
  );
};

export default PirateLoader;
