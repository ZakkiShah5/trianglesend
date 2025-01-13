import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../../App.css'


const Footer = () => {
  return (
    <footer className='bg-primary font-pirate text-secondary shadow-lg'>
        <div className="upper-border"></div>
      <div className='p-5 max-w-screen-lg  transition ease-in-out my-0 mx-auto flex flex-col md:flex-row justify-between'>
        <div>
          <Link to='/'>
            <h1 className='text-2xl'>
              Triangles<span className='text-white'>End</span>
            </h1>
          </Link>
          <p className='text-white'>
            Second star to the right and straight on till morning
          </p>
          <p className='text-xs mt-10'> ©  {new Date().getFullYear()}  Trianglesend – All Rights Reserved</p>
        </div>
        <div>
          <h1 className='text-xl'>Links</h1>
          <div className='flex flex-col text-white'>
            <Link to='/'>World of te</Link>
            <Link to='/'>Magic for hire</Link>
            <Link to='/'>Volunteer at te</Link>
            <Link to='/'>Contact us</Link>
          </div>
        </div>
        <div>
          <h1 className='text-xl'>Contact</h1>
          <div className='flex flex-col text-white'>
            <div className='flex items-center gap-3'>
              <FaEnvelope className='text-secondary' />
              <a href='mailto:appliedalchemy@live.com'>
                appliedalchemy@live.com
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt className='text-secondary' />
              <span>612-991-3190</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
