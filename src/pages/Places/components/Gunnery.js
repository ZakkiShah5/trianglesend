import gun1 from '../../../assets/gun3.jpg' 
import gun2 from '../../../assets/gun1.jpg' 
import gun4 from '../../../assets/gun4.jpg' 
import gun3 from '../../../assets/slider/cannon.jpg' 

const Gunnery = () => {
  return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center py-10 px-5'>
          <div className='max-w-screen-xl w-full'>
            <div className='relative bg-white shadow-lg overflow-hidden flex flex-col md:flex-row items-center'>
              <div className='w-full md:w-1/2 p-10'>
                <h1 className='text-xl md:text-3xl text-secondary font-bold font-pirate'>
                  The Gunnery Range
                </h1>
                <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
                  Aim True, Fire Boldly
                </h2>
                <p className='text-gray-700 mt-4'>
                  At the Gunnery Range of Triangles End, you’ll step into the boots
                  of a true ship’s gunner. Here, visitors have the rare opportunity
                  to fire authentic steel cannons—without gunpowder but still
                  packing a powerful punch. This thrilling activity combines skill,
                  precision, and a dash of daring, offering an unforgettable
                  experience for all who seek it.
                </p>
              </div>
    
              <div className='w-full md:w-1/2'>
                <img alt='img' src={gun1} className='w-full h-full object-cover' />
              </div>
            </div>
            <div className=' bg-white shadow-lg overflow-hidden flex flex-col md:flex-row-reverse items-center'>
              <div className='w-full md:w-1/2 p-10'>
                <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
                  Test Your Mettle
                </h2>
                <p className='text-gray-700 mt-4'>
                  The Gunnery Range is no ordinary firing line; it’s a proving
                  ground where crews compete to showcase their aim and coordination.
                  Targets of all shapes and sizes await, challenging participants to
                  adjust their sights, perfect their technique, and aim true.
                  Whether you’re a seasoned sharpshooter or a first-time gunner, the
                  thrill of a successful shot will have you cheering alongside your
                  crew.
                </p>
              </div>
    
              <div className='w-full md:w-1/2'>
                <img alt='img' src={gun2} className='w-full h-full object-cover' />
              </div>
            </div>
            <div className=' bg-white shadow-lg overflow-hidden flex flex-col md:flex-row items-center'>
              <div className='w-full md:w-1/2 p-10'>
                <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
                  Guided by the Gunner’s Mate
                </h2>
                <p className='text-gray-700 mt-4'>
                  Safety and skill go hand in hand at the Gunnery Range, and the
                  Gunner’s Mate is there to ensure both. A master of the cannons,
                  the Gunner’s Mate oversees every shot, running drills and guiding
                  participants through the finer points of gunnery. Under their
                  expert eye, you’ll learn the secrets of the trade while competing
                  to see which crew earns the title of best shot.
                </p>
              </div>
    
              <div className='w-full md:w-1/2'>
                <img alt='img' src={gun3} className='w-full h-full object-cover' />
              </div>
            </div>
            <div className=' bg-white shadow-lg overflow-hidden flex flex-col md:flex-row-reverse items-center'>
              <div className='w-full md:w-1/2 p-10'>
                <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
                  A Blast of Adventure
                </h2>
                <p className='text-gray-700 mt-4'>
                  The Gunnery Range is more than just an activity—it’s an experience
                  that immerses you in the spirit of naval combat. Feel the power of
                  a cannon under your hands, hear the crack of the shot, and revel
                  in the camaraderie of competition as your crew battles for glory.
                </p>
                <p>
                  Are you ready to fire away and prove your worth? The Gunnery Range
                  awaits your aim!
                </p>
              </div>
    
              <div className='w-full md:w-1/2'>
                <img alt='img' src={gun4} className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </div>   
  )
}

export default Gunnery
