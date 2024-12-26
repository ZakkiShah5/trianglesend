import './Hero.css'

const Hero = () => {
  return (
    <section className='adv-page relative'>
      <div className='p-2 w-80 md:w-9/12 md:max-w-screen-xl mx-auto bg-black/30 backdrop-blur-md absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 adv-glass'>
        <h1 className='text-center font-bold text-secondary font-pirate text-lg md:text-2xl '>
          Pirate Adventure at Triangles End
        </h1>
        <p className='text-center text-white text-xs md:text-lg font-pirate'>
          A Swashbuckling Experience Awaits!
        </p>
        <p className='text-white text-center text-sm mt-1 md:mt-5'>
          Become part of a fearless crew and compete in thrilling activities
          like the <b className='text-secondary'>Treasure Hunt</b>,{' '}
          <b className='text-secondary'>Gunnery Range</b>,{' '}
          <b className='text-secondary'>Cannon Ball</b>, and
          <b className='text-secondary'> Tomahawk Alley</b>. After your
          adventures, enjoy a hearty feast with your mates, complete with plenty
          to drink. This all-inclusive pirate package will make ye feel like a
          true buccaneer!
        </p>
      </div>
    </section>
  )
}

export default Hero
