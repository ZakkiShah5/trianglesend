import {
  FaHandsHelping,
  FaMapMarkedAlt,
  FaQuestionCircle
} from 'react-icons/fa'

const ContactContent = () => {
  const cards = [
    {
      icon: <FaHandsHelping className='text-secondary text-4xl' />,
      title: 'Volunteer or Collaborate',
      description:
        'Ready to lend a hand or team up with us for your next big idea? Reach out and let’s make something extraordinary together.'
    },
    {
      icon: <FaMapMarkedAlt className='text-secondary text-4xl' />,
      title: 'Plan Your Visit',
      description:
        'Whether you’re coming for a Pirate Adventure, hosting an event, or just curious about the magic of Triangles End, we’re here to help you plan the perfect experience.'
    },
    {
      icon: <FaQuestionCircle className='text-secondary text-4xl' />,
      title: 'Ask a Question',
      description:
        'Have something specific in mind? Don’t hesitate to reach out—we’re happy to provide the answers you need.'
    }
  ]

  return (
    <div className='bg-secondary py-10 px-6'>
      <section className='max-w-screen-lg mx-auto'>
        <h2 className='text-xl md:text-3xl font-pirate mb-4 text-center'>
          Collaborate and Innovate
        </h2>
        <p className='text-lg'>
          Are you part of a community group or organization looking for a unique
          way to engage? Let’s team up to create the next great event for your
          members. From fundraisers to celebrations, we’ll combine your vision
          with the immersive magic of Triangles End to design something
          unforgettable.
        </p>
      </section>
      <section className='bg-secondary'>
        <div className='max-w-screen-lg mx-auto'>
          <h2 className='text-3xl font-pirate text-gray-800 text-center mb-8'>
            Let’s Connect
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {cards.map((card, index) => (
              <div
                key={index}
                className='bg-media rounded-lg shadow-lg p-6 flex flex-col items-center text-center'
              >
                <div className='mb-4'>{card.icon}</div>
                <h3 className='text-lg font-pirate font-semibold text-gray-800 mb-2'>
                  {card.title}
                </h3>
                <p className='text-gray-600'>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactContent
