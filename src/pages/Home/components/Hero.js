import cover from '../../../assets/cover.avif'
import badge from '../../../assets/badge.png'

const Hero = () => {
  return (
    <div className='font-pirate relative'>
      <img
        className='object-center bg-cover bg-center'
        src={cover}
        alt='cover'
      />
      <div className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img src={badge} className='w-96' alt='badge' />
      </div>
      <div className='absolute opacity-90 bottom-5 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary p-2'>
        <h1 className='text-5xl text-primary font-bold bg-secondary border-2 border-black'>2024 Pirate Festival at Triangles End</h1>
        <p>September 14-15 Rain or Shine!</p>
      </div>
    </div>
  )
}

export default Hero
