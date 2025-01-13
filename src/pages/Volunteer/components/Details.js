import '../Vol.css'
import { FaHammer, FaBook, FaHandsHelping, FaStar } from 'react-icons/fa'
const Details = () => {
  return (
    <section className='bg-media'>
      <div className='min-h-screen text-black'>
        <div className=' max-w-screen-lg mx-auto py-10 px-6 space-y-10'>
          {/* Header Section */}
          <header className='text-center'>
            <h1 className='text-xl md:text-3xl font-pirate mb-4'>
              Volunteer and Create the Extraordinary
            </h1>
            <p className='text-lg md:text-xl italic'>
              Join the crew of Triangles End and help build a world of wonder
              and adventure!
            </p>
          </header>

          {/* Section 1: Dive into Creativity */}
          <section className='space-y-6'>
            <p className='text-lg'>
              Whether you’re a seasoned craftsman or just love working with your
              hands, volunteering at
              <span className='text-secondary font-bold font-pirate'>
                {' '}
                Triangles End{' '}
              </span>
              is your chance to dive into a world of creativity. Our crew
              transforms raw materials into immersive settings that define the
              magic of Triangles End. From painting backdrops to crafting props,
              your contributions help shape stories that captivate every
              visitor.
            </p>
          </section>

          {/* Section 2: Experience Unique Tools */}
          <section className='space-y-6'>
            <h2 className='text-xl md:text-3xl font-pirate mb-4 text-center'>
              Experience Tools You’ve Only Dreamed Of
            </h2>
            <p className='text-lg'>
              Joining the crew means access to tools and experiences you might
              not encounter in everyday life. Work with CNC machines, operate a
              backhoe, run a sawmill, and master all manner of power tools as we
              bring the world of Triangles End to life. It’s an opportunity to
              learn new skills, expand your horizons, and be part of something
              extraordinary.
            </p>
          </section>

          {/* Section 3: Collaborate and Innovate */}
          <section className='space-y-6'>
            <h2 className='text-xl md:text-3xl font-pirate mb-4 text-center'>
              Collaborate and Innovate
            </h2>
            <p className='text-lg'>
              Are you part of a community group or organization looking for a
              unique way to engage? Let’s team up to create the next great event
              for your members. From fundraisers to celebrations, we’ll combine
              your vision with the immersive magic of Triangles End to design
              something unforgettable.
            </p>
          </section>

          {/* Section 4: Why Join the Crew? */}
          <section className='space-y-6'>
            <h2 className='text-xl md:text-3xl font-pirate mb-4 text-center'>
              Why Join the Crew?
            </h2>

            <section className='space-y-6'>
              <div className='grid gap-6 md:grid-cols-2'>
                {/* Card 1 */}
                <div className='flex  items-center  bg-primary p-4 rounded-lg shadow-xl hover:shadow-xl transition duration-300'>
                  <div className='flex-shrink-0 text-secondary text-3xl mr-4'>
                    <FaHammer />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white font-pirate'>
                      Hands-On Creativity
                    </h3>
                    <p className='text-sm text-blue-100'>
                      Work directly with unique tools and techniques to build
                      amazing creations.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className='flex items-center  bg-primary p-4 rounded-lg shadow-xl hover:shadow-xl transition duration-300'>
                  <div className='flex-shrink-0 text-secondary text-3xl mr-4'>
                    <FaBook />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white font-pirate'>
                      Learn and Grow
                    </h3>
                    <p className='text-sm text-blue-100'>
                      Gain experience with equipment and processes you might
                      never encounter elsewhere.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className='flex items-center  bg-primary p-4 rounded-lg shadow-xl hover:shadow-xl transition duration-300'>
                  <div className='flex-shrink-0 text-secondary text-3xl mr-4'>
                    <FaHandsHelping />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white font-pirate'>
                      Make Connections
                    </h3>
                    <p className='text-sm text-blue-100'>
                      Join a team of passionate, like-minded adventurers who
                      share your excitement for storytelling and craftsmanship.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className='flex items-center  bg-primary p-4 rounded-lg shadow-xl hover:shadow-xl transition duration-300'>
                  <div className='flex-shrink-0 text-secondary text-3xl mr-4'>
                    <FaStar />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white font-pirate'>
                      Leave Your Mark
                    </h3>
                    <p className='text-sm text-blue-100'>
                      Contribute to the legacy of Triangles End and help bring
                      joy to everyone who visits.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <section className='bg-secondary'>
          <section className='text-center p-5 max-w-screen-lg mx-auto py-10 px-6 space-y-6'>
            <h2 className='text-xl md:text-3xl font-pirate mb-4 text-center'>
              Ready to Jump Aboard?
            </h2>
            <p className='text-lg'>
              Whether you’re volunteering your time or collaborating with your
              group, there’s a place for you at{' '}
              <span className='text-primary font-pirate'>Triangles End</span>.
              Be part of the crew that turns imagination into reality and help
              us write the next chapter of this incredible story.
            </p>
            <div className='text-center my-2'>
              <button className='bg-primary text-secondary py-2 px-6 font-semibold rounded shadow-md hover:from-yellow-300 font-pirate hover:to-secondary hover:scale-105 transform transition-all duration-300 ease-in-out'>
                <a href='#race' rel='noreferrer'>
                  Contact Now
                </a>
              </button>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

export default Details
