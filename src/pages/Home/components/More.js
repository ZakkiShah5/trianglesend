import circle from '../../../assets/circle.png'

const More = () => {
  return (
    <section className='max-w-screen-xl mx-auto bg-primary text-white p-10'>
      <div className='mb-10'>
        <h1 className='text-center text-4xl font-pirate text-secondary'>
          Welcome to Triangles End
        </h1>
        <p className='text-center font-pirate'>
          A Place of Adventure, Creativity, and Giving Back
        </p>
      </div>
      <div>
        <section>
          <div>
            <h1 className='flex gap-1 items-center my-2'>
              <span>
                <img className='w-5 rounded-full' src={circle} alt='img' />
              </span>
              <span className='text-xl font-pirate text-secondary'>
                A World of Pirates and Possibility:
              </span>
            </h1>
            <p>
              At Triangles End, we invite you to step into a world of
              swashbuckling adventure. Whether you’re dreaming of treasure
              hunts, lively pirate escapades, or immersive themed experiences,
              this is the place where stories come to life. Join one of our
              legendary Pirate Adventures and create memories that will last a
              lifetime.
            </p>
            <p>
              But the journey doesn’t have to end when the sun sets—stay with us
              at Triangles End and immerse yourself fully in the magic of this
              unique destination.
            </p>
          </div>
          <div>
            <h1 className='flex gap-1 items-center my-2'>
              <span>
                <img className='w-5 rounded-full' src={circle} alt='img' />
              </span>
              <span className='text-xl font-pirate text-secondary'>
                The Magic Behind the Machines:
              </span>
            </h1>
            <p>
              Bringing characters and environments to life is part of what makes
              Triangles End special. In partnership with Distortions Unlimited,
              we’ve developed an innovative and approachable way to create
              lifelike animatronics.
            </p>
            <p>
              Our software is like modern-day magic—powerful yet accessible to
              everyone. Whether you’re a hobbyist exploring new possibilities or
              an expert building intricate creations, Triangles End helps you
              bring your imagination to life. It’s magic you can wield.
            </p>
          </div>
          <div>
            <h1 className='flex gap-1 items-center my-2'>
              <span>
                <img className='w-5 rounded-full' src={circle} alt='img' />
              </span>
              <span className='text-xl font-pirate text-secondary'>
                Giving Back:
              </span>
            </h1>
            <p>
              At Triangles End, we believe in making a difference. A portion of
              our profits supports charitable causes, like the Tri-County Humane
              Society, ensuring that our work helps not only bring joy to our
              visitors but also contributes to our community and beyond.
            </p>
          </div>
        </section>
        <section>
          <h1 className='text-2xl text-secondary font-pirate my-3'>
            Explore the Possibilities
          </h1>
          <ul className='flex flex-col gap-2'>
            <li>
              <span className='text-secondary font-pirate'>
                Discover Events:{' '}
              </span>
              Attend one of our thrilling Pirate Adventures or find the perfect
              experience to spark your imagination.
            </li>
            <li>
              <span className='text-secondary font-pirate'>
                Stay at Triangles End:
              </span>
              Spend the night and immerse yourself fully in the magic of the
              place.
            </li>
            <li>
              <span className='text-secondary font-pirate'>
                Host Your Event:{' '}
              </span>
              From private celebrations to creative gatherings, Triangles End
              can be the perfect venue for your next unforgettable event.
            </li>
            <li>
              <span className='text-secondary font-pirate'>
                Experience the Magic:
              </span>
              Learn how our innovative tools make animatronics easy and
              accessible.
            </li>
            <li>
              <span className='text-secondary font-pirate'>
                Join the Crew:{' '}
              </span>
              We’re always looking for passionate volunteers and organizations
              to collaborate with. Whether you want to help behind the scenes or
              work with us to make a difference, there’s a place for you at
              Triangles End.
            </li>
          </ul>
          <div className='text-center my-2'>
            <button className='bg-secondary text-primary py-2 px-6 font-semibold rounded shadow-md hover:from-yellow-300 font-pirate hover:to-secondary hover:scale-105 transform transition-all duration-300 ease-in-out'>
              <a href='#race' rel="noreferrer">Set Sail With Us</a>
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default More
