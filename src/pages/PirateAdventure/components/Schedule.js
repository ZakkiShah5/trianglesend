import './Hero.css'
const Schedule = () => {
  return (
    <section className='bg-media py-10 px-5'>
      {/* Schedule Overview Section */}
      <div className='max-w-6xl mx-auto'>
        <div className='flex-1'>
          <h2 className='text-3xl md:text-4xl font-pirate font-bold text-primary mb-6'>
            Pirate Adventure Schedule
          </h2>
          <p className='text-lg italic text-primary mb-6'>
            Pirate Adventure is a full day immersive event.{' '}
            <b>
              Make plans to arrive by 1:30 so you can catch your ride to
              Triangle End
            </b>{' '}
            (Guests that arrive late will need to walk to Triangles End and may
            miss being selected into a crew. This is not unlike attending a
            theatrical <b>performance</b>
            please be on time). Crew members need to arrive promptly to ensure
            the games occur on schedule and that you have time to become
            familiar with your crewmates and crew lead for the day.
          </p>
        </div>
        <div className='flex-1 rounded-xl p-5'>
          <div className='flex flex-col gap-5'>
            <div className='bg-transparent border-secondary border-2 md:border-none text-primary p-4  '>
              <div className='flex flex-col md:flex-row gap-5 items-center'>
                <span className='text-5xl font-pirate font-bold text-secondary'>
                  1:30
                </span>
                <div>
                  <h1 className='text-xl font-extrabold font-pirate text-secondary'>
                    Land Fall
                  </h1>
                  <p>
                    Arrive at Lands End and proceed to Port Waye to catch a ride
                    to Triangles End
                  </p>
                </div>
              </div>
            </div>
            <div className='text-primary'>
              <div className='flex flex-col p-4 border-secondary border-2 md:border-none md:flex-row gap-5 items-center'>
                <span className='text-5xl font-pirate font-bold text-secondary'>
                  2:00
                </span>
                <div>
                  <h1 className='text-xl font-extrabold font-pirate text-secondary'>
                    Treasure Hunt and Capture the Flag
                  </h1>

                  <p>
                    Let the games begin, you can your crew mates will begin your
                    treasure hunt adventure trekking across acers of woods and
                    fields in your quest for treasure. But be on the lookout for
                    from those scoundrels from the other crews who may be
                    planning steal your treasure!
                  </p>
                </div>
              </div>
            </div>
            <div className='text-primary'>
              <div className='flex flex-col md:flex-row p-4 border-secondary border-2 md:border-none gap-5 items-center'>
                <span className='text-5xl font-pirate font-bold text-secondary'>
                  3:00
                </span>
                <div>
                  <h1 className='text-xl font-extrabold font-pirate text-secondary'>
                    Gunnery Range OR Pirate Ball
                  </h1>

                  <p>
                    Next up we'll be testing your skills as gunners and
                    defenders to the mast. The crews will rotate thought these
                    challenges ultimately completing head-to-head.
                  </p>
                  <p>
                    At the Gunnery Range your crew will be measured to see if
                    they can put iron on target (Ok wood in this case) using
                    full size steel cannons powered by the winds of perdition
                    (These are air cannons, and the range is controlled by a
                    Gunnery Master)
                  </p>
                  <p>
                    At Key Blanko, your crew will engage another crew head on at
                    Pirate Ball. Pirate Ball is a modified version of Dodge ball
                    designed test your metal in ship-to-ship competition (If
                    you're not feeling up to it, please feel free to watch and
                    cheer your crewmates on!).
                  </p>
                </div>
              </div>
            </div>
            <div className='text-primary'>
              <div className="flex flex-col border-secondary border-2 md:border-none p-4 md:flex-row gap-5 font-bold items-center">
              <span className='text-5xl font-pirate text-secondary'>4:00</span>
              <h1 className='text-xl font-extrabold font-pirate text-secondary'>
                Awards and Feast
              </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
