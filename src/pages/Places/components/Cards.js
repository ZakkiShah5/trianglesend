import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Sample Images (Replace with your actual image paths)
import hutImg from '../../../assets/hut.jpg';
import hallImg from '../../../assets/hall.jpg';
import shackImg from '../../../assets/cook.jpg';
import pubImg from '../../../assets/oven.jpg';
import fireImg from '../../../assets/ring.jpg';
import alleyImg from '../../../assets/tom.jpg';
import scalesImg from '../../../assets/scale.jpg';

const slides = [
  {
    title: 'The Quartermaster’s Hut',
    description:
      'The keeper of treasures and tales, it’s where resources are managed and the crew is outfitted for their next escapade.',
    image: hutImg,
  },
  {
    title: 'The Hall',
    description:
      'A place of gathering, revelry, and timeless celebration—a space where camaraderie reigns supreme.',
    image: hallImg,
  },
  {
    title: 'The Cook Shack',
    description:
      'The source of hearty meals and comfort, fueling the crew for the adventures ahead.',
    image: shackImg,
  },
  {
    title: 'The Pub and Pizza Oven',
    description:
      'A rustic haven where you can enjoy a drink, savor wood-fired delights, and bask in the warmth of good company.',
    image: pubImg,
  },
  {
    title: 'The Fire Ring',
    description:
      'A massive communal hearth, where the flames light up the night and tales of triumph and treasure echo across the Camp.',
    image: fireImg,
  },
  {
    title: 'The Tomahawk Alley',
    description:
      'A venue for skill and competition, where crew members test their mettle by hurling steel into targets with precision and power.',
    image: alleyImg,
  },
  {
    title: 'The Scales of Fortune',
    description:
      'The culmination of every treasure hunt and adventure. Here, treasures are weighed, measured, and celebrated in a climactic moment that determines the victors of the competition.',
    image: scalesImg,
  },
];

const Cards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative max-w-screen-lg mx-auto">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
      >
        <FaChevronCircleLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
      >
        <FaChevronCircleRight/>
      </button>

      {/* Slide Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 p-5 md:px-12 rounded-xl shadow-xl bg-media h-80 md:h-96">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-secondary text-lg md:text-2xl font-bold font-pirate">
            {slides[currentSlide].title}
          </h1>
          <p className="text-primary text-xs md:text-lg italic mt-2">
            {slides[currentSlide].description}
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-40 md:h-80 rounded-lg shadow-md"
          />
        </div>
      </div>

     
    </div>
  );
};

export default Cards;
