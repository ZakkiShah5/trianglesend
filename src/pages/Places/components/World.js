import Cards from './Cards'
import { Link } from 'react-router-dom'

const World = () => {
  return (
    <section className='max-w-screen-xl my-5 mx-auto text-white p-10'>
      <div className='flex flex-col items-center md:flex-row gap-5'>
        <div className='text-white w-full md:w-1/2 z-20'>
          <h1 className='text-center md:text-left text-lg md:text-2xl font-pirate text-secondary font-bold'>
            A World Within a World
          </h1>
          <p>
            At the heart of the Camp lies the Enigma, the captain’s quarters and
            the legendary upper deck. Here, under Captain Fox’s watchful eye,
            secrets are guarded, conspiracies take shape, and strategies are
            born. The upper deck offers the perfect perch for dining, plotting,
            or simply soaking in the magic of Triangles End.
          </p>
          <h2 className='text-center md:text-left text-lg md:text-2xl mt-2 font-pirate text-secondary'>
            Where Every Great Story Begins
          </h2>
          <p>
            The Camp is more than just a place; it’s a home, a haven, and a hub
            for adventure. It’s where the crew gathers before embarking on their
            journeys and returns to share their triumphs. It’s the heart of
            Triangles End, filled with the sounds of laughter, the clink of
            tankards, and the crackle of the fire as it lights up the night.{' '}
          </p>
          <p>
            Whether you’re planning your next move, feasting with friends,
            testing your skills, or weighing the spoils of your conquest, the
            Camp is where memories are made and legends are born.{' '}
          </p>

          <button className='text-primary bg-secondary mt-5 text-xs md:text-lg py-2 px-6 font-semibold rounded shadow-md hover:from-yellow-300 font-pirate hover:to-secondary hover:scale-105 transform transition-all duration-300 ease-in-out'>
            <Link to='/contact'>
              Come join the crew at the Camp—your adventure awaits!
            </Link>
          </button>
        </div>
        <Cards />
      </div>
    </section>
  )
}

export default World
