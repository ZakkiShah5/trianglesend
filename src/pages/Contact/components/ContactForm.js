import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, email, number, message } = formData;
    
        // Encode details for the mailto link
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nPhone: ${number}\n\nMessage:\n${message}`
        );
    
        // Create mailto link
        const mailtoLink = `mailto:info@trianglesend.com?subject=${subject}&body=${body}`;
        
        // Open the user's email client
        window.location.href = mailtoLink;
      };
  return (
    <section id='fillform' className='bg-media py-10 px-6'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Contact Details */}
          <div>
            <h2 className='text-3xl font-pirate font-bold text-gray-800 mb-6'>
              How to Get in Touch
            </h2>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <FaEnvelope className='text-secondary font-bold text-2xl mr-4' />
                <p className='text-gray-700'>
                  <span className='font-semibold'>Email Us:</span>{' '}
                  <a
                  rel='noreferrer'
                    href={`mailto:info@trianglesend.com`}
                    className='text-secondary font-bold hover:underline'
                  >
                    info@TrianglesEnd.com
                  </a>
                  <br />
                  Whether it’s a question, a story, or just a hello, send us a
                  message, and we’ll get back to you as quickly as we can.
                </p>
              </div>
              <div className='flex items-start'>
                <FaPhone className='text-secondary font-bold text-2xl mr-4' />
                <p className='text-gray-700'>
                  <span className='font-semibold'>Call Us:</span>{' '}
                  <a
                  rel='noreferrer'
                    href='tel:612-991-3190'
                    className={`text-secondary font-bold hover:underline`}
                  >
                    612-991-3190
                  </a>
                  <br />
                  Want to talk to someone directly? Give us a call and let’s
                  start the conversation.
                </p>
              </div>
              <div className='flex items-start'>
                <FaMapMarkerAlt className='text-secondary font-bold text-2xl mr-4' />
                <p className='text-gray-700'>
                  <span className='font-semibold'>Visit Us:</span> Triangles End
                  is waiting to welcome you to the heart of adventure. Reach out
                  for directions or more information about your journey to us.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25021561.372849792!2d-109.79100294905753!3d43.424961652652186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f5fdad30b4cd63%3A0xdfacbc0196d724f5!2s256%20Hilltop%20Ln%2C%20Waconia%2C%20MN%2055387%2C%20USA!5e0!3m2!1sen!2sbr!4v1736806240264!5m2!1sen!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps showing the location of Triangles End"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-primary font-pirate mb-6">
        Send Us a Message
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="number" className="block text-gray-600 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Number"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-600 font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-primary font-pirate font-medium py-2 rounded-md hover:bg-primary hover:text-white delay-75"
        >
          Submit
        </button>
      </form>
    </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
