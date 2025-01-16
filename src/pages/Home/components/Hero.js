import cover from '../../../assets/cover.avif'
import ship from '../../../assets/slider/entrance.webp'
import guest from '../../../assets/slider/guests.jpg'
import badge from '../../../assets/badge.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import '../Home.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isLargerScreen = useMediaQuery({ minWidth: 768 });
  const slides = [
    {
      image: cover,
      title: '2025 Pirate Festival at Triangles End',
      date: 'Oct 11 2025!'
    },
    {
      image: ship,
      title: '2025 Pirate Festival at Triangles End',
      date: 'Oct 11 2025!'
    },
    {
      image: guest,
      title: '2025 Pirate Festival at Triangles End',
      date: 'Oct 11 2025!'
    }
  ]
  return (
    <div className='relative font-pirate'>
      <div className='absolute top-2 md:top-10 left-1/2 transform z-20 -translate-x-1/2 -translate-y-1/2'>
        <img src={badge} className='w-11/12 md:w-96' alt='badge' />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={isLargerScreen}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        className='hero-swiper'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='h-full'>
            <img
              className='object-cover w-full h-[50vh] md:h-[110vh]'
              src={slide.image}
              alt='cover'
            />
            <div className='absolute w-72 md:w-6/12 opacity-90 bottom-5 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary p-2 z-10'>
              <h1 className='text-md md:text-5xl text-primary font-bold bg-secondary border-2 border-black'>
                {slide.title}
              </h1>
              <p className='text-sm md:text-2xl'>{slide.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
