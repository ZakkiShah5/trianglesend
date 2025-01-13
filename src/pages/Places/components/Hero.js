const Hero = () => {
  return (
    <section className='max-w-screen-xl mx-auto bg-secondary text-white p-10 more'>
      <div className='text-center'>
        <h1 className='text-center text-3xl md:text-4xl font-pirate text-primary'>
          Welcome to the Camp at Triangles End
        </h1>
        <p className='text-center font-medium text-primary font-pirate'>
          The Heart of Adventure and Camaraderie
        </p>
        <p className='text-center mx-auto font-sans max-w-[600px] text-primary'>
          Step into the Camp, the vibrant center of life at Triangles End, where
          stories are shared, plans are hatched, and feasts are celebrated under
          the open sky. This is where the crew of Triangles End lives, works,
          and comes together—an immersive hub of action and camaraderie that
          sets the stage for every great adventure.
        </p>

        <button className='bg-primary text-secondary mt-5 py-2 px-6 font-semibold rounded shadow-md hover:from-yellow-300 font-pirate hover:to-secondary hover:scale-105 transform transition-all duration-300 ease-in-out'>
          <a href='#race' rel='noreferrer'>
            Set Sail With Us
          </a>
        </button>
      </div>
    </section>
  )
}

export default Hero
