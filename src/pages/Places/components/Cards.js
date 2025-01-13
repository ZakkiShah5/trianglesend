// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'
import '../Places.css'

import { EffectCards } from 'swiper/modules'

const slides = [
  {
    title: 'The Quartermaster’s Hut',
    description:
      'The keeper of treasures and tales, it’s where resources are managed and the crew is outfitted for their next escapade.'
  },
  {
    title: 'The Hall',
    description:
      'A place of gathering, revelry, and timeless celebration—a space where camaraderie reigns supreme.'
  },
  {
    title: 'The Cook Shack',
    description:
      'The source of hearty meals and comfort, fueling the crew for the adventures ahead.'
  },
  {
    title: 'The Pub and Pizza Oven',
    description:
      'A rustic haven where you can enjoy a drink, savor wood-fired delights, and bask in the warmth of good company.'
  },
  {
    title: 'The Fire Ring',
    description:
      'A massive communal hearth, where the flames light up the night and tales of triumph and treasure echo across the Camp.'
  },
  {
    title: 'The Tomahawk Alley',
    description:
      'A venue for skill and competition, where crew members test their mettle by hurling steel into targets with precision and power.'
  },
  {
    title: 'The Scales of Fortune',
    description:
      'The culmination of every treasure hunt and adventure. Here, treasures are weighed, measured, and celebrated in a climactic moment that determines the victors of the competition.'
  }
]

const Cards = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='text-center w-80 mt-36 rounded-xl shadow-xl hover:bg-primary transition-all hover:bg-opacity-30 hover:backdrop-blur-sm'>
              <h1 className='text-secondary text-lg p-1 font-pirate font-bold'>
                {slide.title}
              </h1>
              <p className='text-sm font-medium'>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Cards
