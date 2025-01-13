import React from "react";
import loaderimg from '../../assets/icons/wheel.png'
import './Header.css'

const PirateLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
    
      <div className="pirate-wheel">
        <div className="flex items-center justify-center">
          <img src={loaderimg} alt="" />
        </div>
      </div>
      <div className="text-lg md:text-2xl font-pirate font-semibold text-secondary">
        Loading the Pirate Adventure...
      </div>
    </div>
  );
};

export default PirateLoader;
