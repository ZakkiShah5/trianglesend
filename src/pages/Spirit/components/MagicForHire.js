import spirit from '../../../assets/spirit.webp'
import { Link } from 'react-router-dom'

const MagicForHire = () => {
  return (
    <div className='font-sans'>
      {/* Hero Section */}
      <section className='adv-page relative'>
      <div className='p-2 w-80 md:w-9/12 md:max-w-screen-xl mx-auto bg-black/30 backdrop-blur-md absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 adv-glass'>
        <h1 className='text-center font-bold text-secondary font-pirate text-lg md:text-2xl '>
        Magic for Hire
        </h1>
        <p className='text-center text-white text-xs md:text-lg font-pirate'>
        Bring Your Stories to Life with Spirit Forge
        </p>
       
      </div>
    </section>
      

      {/* Introduction Section */}
      <section id='about' className='py-20 bg-gray-100 max-w-screen-xl'>
        <div className='mx-auto md:flex p-5 gap-10'>
          <img
            src={spirit}
            alt='Magic Illustration'
            className='md:w-[50%] object-cover bg-center rounded shadow'
          />
          <div className='text-lg'>
            <p>
              Imagine a world where your stories don’t just live in your
              imagination—they unfold in real-time, enchanting and engaging your
              guests with lifelike characters that adapt, respond, and connect
              on a personal level. With Spirit Forge, that world becomes
              reality.
            </p>
            <p>
              Spirit Forge is our cutting-edge platform for creating and
              delivering immersive digital storytelling experiences. Whether
              it’s crafting memorable moments for your guests or building
              responsive characters that interact seamlessly, Spirit Forge turns
              your vision into a magical, interactive experience.
            </p>
            <div>
              <div className='container mx-auto text-center'>
                <h2 className='text-2xl font-pirate my-5'>
                  Features of Spirit Forge
                </h2>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div className='bg-primary text-white shadow rounded p-4'>
                    <h3 className='text-lg text-secondary font-pirate mb-2 font-bold'>
                      Interactive Characters
                    </h3>
                    <p className='text-sm'>
                      Digital characters that see, hear, and interact with
                      guests, adapting to their preferences and behaviors—all
                      while ensuring privacy and security.
                    </p>
                  </div>
                  <div className='bg-primary text-white shadow rounded p-4'>
                    <h3 className='text-lg text-secondary font-pirate mb-2 font-bold'>
                      Multilingual and Expressive
                    </h3>
                    <p className='text-sm'>
                      Characters respond in natural language, using emotions and
                      gestures to create engaging, multilingual interactions.
                    </p>
                  </div>
                  <div className='bg-primary text-white shadow rounded p-4'>
                    <h3 className='text-lg text-secondary font-pirate mb-2 font-bold'>
                      Authentic Personalities
                    </h3>
                    <p className='text-sm'>
                      Develop backstories and personality profiles for your
                      characters, ensuring every interaction feels unique and
                      meaningful.
                    </p>
                  </div>
                  <div className='bg-primary text-white shadow rounded p-4'>
                    <h3 className='text-lg text-secondary font-pirate mb-2 font-bold'>
                      Positive Engagement
                    </h3>
                    <p className='text-sm'>
                      Spirit Forge is designed to suppress negative
                      interactions, focusing on fun, inspiring, and inclusive
                      storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='bg-primary text-white py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-pirate text-secondary font-bold mb-10'>Why Choose Spirit Forge?</h2>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='p-6'>
              <h3 className='text-xl font-pirate text-secondary font-bold mb-2'>
                Elevate Guest Experiences
              </h3>
              <p>Captivate your audience with dynamic, personalized stories.</p>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-pirate text-secondary font-bold mb-2'>Boost Engagement</h3>
              <p>Form memorable connections with responsive characters.</p>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-pirate text-secondary font-bold mb-2'>Simplify Creation</h3>
              <p>
                Leverage AI and cloud services to reduce content complexity.
              </p>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-pirate text-secondary font-bold mb-2'>Ensure Excellence</h3>
              <p>
                Prioritize quality and consistency with responsible AI
                principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='bg-secondary  py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-pirate text-primary font-bold mb-4'>
            Ready to Forge Your Story?
          </h2>
          <p className='mb-6'>
            Let the magic of Spirit Forge transform your storytelling.
          </p>
          <button className='bg-white text-primary py-2 px-6 font-semibold rounded shadow-md hover:from-yellow-300 font-pirate hover:to-secondary hover:scale-105 transform transition-all duration-300 ease-in-out'>
            <Link to='/contact'>
            Contact Us Today
            </Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default MagicForHire
