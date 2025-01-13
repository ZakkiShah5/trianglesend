import img1 from '../../../assets/arrive.jpg'
import img2 from '../../../assets/port.jpg'
import img3 from '../../../assets/port2.jpg'
import img4 from '../../../assets/slider/guests.jpg'

const Port = () => {
  return (
    <div className='bg-secondary min-h-screen flex flex-col items-center py-10 px-5'>
      <div className='max-w-screen-xl w-full'>
        <div className='relative bg-white shadow-lg overflow-hidden flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 p-10'>
            <h1 className='text-xl md:text-3xl text-secondary font-bold font-pirate'>
              Port Wayne
            </h1>
            <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
              The Gateway to Triangles End
            </h2>
            <p className='text-gray-700 mt-4'>
              Your journey into the world of Triangles End begins at Port Wayne,
              the fateful shore where Captain Fox and his crew first found
              themselves marooned after their ill-fated voyage through the
              Bermuda Triangle. This is where the story of Triangles End was
              born—and where yours begins.
            </p>
          </div>

          <div className='w-full md:w-1/2'>
            <img alt='img' src={img1} className='w-full h-full object-cover' />
          </div>
        </div>
        <div className=' bg-white shadow-lg overflow-hidden flex flex-col md:flex-row-reverse items-center'>
          <div className='w-full md:w-1/2 p-10'>
            <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
              The Wreck of the Wayward Fortune
            </h2>
            <p className='text-gray-700 mt-4'>
              As you follow the winding trail that leads to Port Wayne, you’ll
              feel the shift into another world. The trail brings you
              face-to-face with the haunting wreckage of the crew’s ship, the
              Wayward Fortune. Named for its hopeful mission turned astray, the
              Wayward Fortune stands as both a warning and a welcome—a monument
              to the resilience and resourcefulness of those who call Triangles
              End home.
            </p>
            <p>
              Step aboard this storied vessel and prepare to sign on with the
              Quartermaster, who will officially welcome you into the crew.
              Whether you’re a seasoned adventurer or a new recruit, the
              Quartermaster will ensure you’re ready for the adventures ahead.
            </p>
          </div>

          <div className='w-full md:w-1/2'>
            <img alt='img' src={img2} className='w-full h-full object-cover' />
          </div>
        </div>
        <div className=' bg-white shadow-lg overflow-hidden flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 p-10'>
            <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
              Arriving at Port Wayne
            </h2>
            <p className='text-gray-700 mt-4'>
              Once you’ve signed the ship’s log and taken your oath as part of
              the crew, you’ll step onto the docks of Port Wayne. Here, you’ll
              feel the pulse of the port—the anticipation of new arrivals, the
              energy of departing transport, and the whispers of the tales yet
              to unfold.
            </p>
            <p>
              Awaiting your next step, you’ll be transported to the Camp, where
              the world of Triangles End fully comes alive. This is no ordinary
              journey; your passage is steeped in the magic and mystery of the
              place, setting the tone for the adventures ahead.
            </p>
          </div>

          <div className='w-full md:w-1/2'>
            <img alt='img' src={img3} className='w-full h-full object-cover' />
          </div>
        </div>
        <div className=' bg-white shadow-lg overflow-hidden flex flex-col md:flex-row-reverse items-center'>
          <div className='w-full md:w-1/2 p-10'>
            <h2 className='text-lg md:text-xl font-semibold text-gray-700 mt-2'>
              Your Story Begins Here
            </h2>
            <p className='text-gray-700 mt-4'>
              Port Wayne isn’t just a destination—it’s the gateway to another
              world, a place where legends are forged, and new beginnings are
              made. Are you ready to join the crew and embark on the adventure
              of a lifetime?
            </p>
            <p>
              The Wayward Fortune and the crew of Triangles End await your
              arrival. Will you answer the call?
            </p>
          </div>

          <div className='w-full md:w-1/2'>
            <img alt='img' src={img4} className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Port
