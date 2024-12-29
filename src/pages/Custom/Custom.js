import './Custom.css'
import crew from '../../assets/slider/cannon.jpg'
import pirate from '../../assets/slider/pirate.jpg'
import hunt from '../../assets/slider/hunt.jpg'
import feast from '../../assets/feast.jpg'
import circle from '../../assets/circle.png'

const Custom = () => {
  return (
    <section className='max-w-screen-xl mx-auto p-5 text-white'>
      <div className='md:h-[50vh] my-4 md:relative'>
        <h1 className='text-secondary text-2xl font-pirate text-center'>
          Host Your Event at Triangles End
        </h1>
        <p className='text-center font-pirate'>A Venue Like No Other </p>
        <div className='max-w-xl text-center mx-auto'>
          <p>
            Imagine a place where adventure and wonder come to life, where your
            celebration becomes part of a grand story. At Triangles End, your
            event is more than just a gathering—it’s an experience infused with
            magic and mystery. Whether it’s a themed wedding, a milestone
            birthday, or a company event like no other, our one-of-a-kind venue
            provides the perfect backdrop for unforgettable memories.
          </p>
        </div>
        <div className='h-[30vh] md:h-0 relative md:static'>
          <img
            className='w-40 md:w-80 absolute right-[-30px] top-5 rounded-lg'
            src={crew}
            alt=''
          />
          <img
            className='w-40 md:w-80 absolute left-[-15px] md:left-[-30px] top-5 rounded-lg'
            src={pirate}
            alt=''
          />
          <img
            className='w-32 md:w-60 absolute left-8 md:left-20 shadow-lg rounded-lg top-24'
            src={feast}
            alt=''
          />
          <img
            className='w-32 md:w-60 absolute right-8 md:right-16 shadow-lg rounded-lg top-24'
            src={hunt}
            alt=''
          />
        </div>
      </div>
      <section>
        <h1 className='text-secondary text-2xl font-pirate text-center my-5'>
          A Canvas for Your Imagination
        </h1>
        <p>
          Triangles End is a land of possibilities, ready to transform into the
          setting of your dreams. While you’ll need to bring your own food and
          drinks for now, we’ll provide a world steeped in charm and adventure.
        </p>
        <p>
          Enhance your event with unique, optional activities that take your
          experience to the next level:
        </p>
        <ul className='my-2'>
          <li className='flex gap-2 items-center'>
            <img className='w-5 rounded-full' src={circle} alt='img' />
            <span>
              <span className='text-secondary'>Sail Across Triangles End:</span>
              Begin your journey aboard our ship as you traverse the magical
              expanse of the venue.
            </span>
          </li>
          <li className='flex gap-2 items-center'>
            <img className='w-5 rounded-full' src={circle} alt='img' />
            <span>
              <span className='text-secondary'>Test Your Mettle: </span>
              Challenge your guests at the cannonball range and let their inner
              pirate shine.
            </span>
          </li>
          <li className='flex gap-2 items-center'>
            <img className='w-5 rounded-full' src={circle} alt='img' />
            <span>
              <span className='text-secondary'>Savor the Flavor: </span>
              Make use of our wood-fired pizza oven to craft delicious meals
              with a rustic twist.
            </span>
          </li>
          <li className='flex gap-2 items-center'>
            <img className='w-5 rounded-full' src={circle} alt='img' />
            <span>
              <span className='text-secondary'>Discover Hidden Treasures:</span>
              Add a custom treasure hunt tailored to your group—an engaging way
              to bring everyone together on a shared adventure.
            </span>
          </li>
        </ul>
        <p>
          Each of these enhancements comes with an additional charge based on
          your needs, allowing you to craft an experience as grand or intimate
          as you wish.
        </p>
      </section>
      <section className='my-10'>
        <h1 className='text-secondary text-2xl font-pirate text-center my-5'>
          A Venue That Inspires{' '}
        </h1>
        <p>
          Triangles End offers a timeless setting where the extraordinary feels
          real. It’s the perfect choice for a celebration that’s anything but
          ordinary. From the echoes of cannon fire to the warmth of a wood-fired
          pizza, your event will be surrounded by the magic and charm of a place
          unlike any other.{' '}
        </p>
        <p>Step aboard. Your adventure begins with your imagination. </p>
        <div className='text-center my-2'>
          <button className='bg-secondary text-primary py-2 px-6 font-semibold rounded shadow-md hover:from-yellow-300 font-pirate hover:to-secondary hover:scale-105 transform transition-all duration-300 ease-in-out'>
            <a href='#race' rel='noreferrer'>
              Start Planning Your Event
            </a>
          </button>
        </div>
      </section>
    </section>
  )
}

export default Custom
