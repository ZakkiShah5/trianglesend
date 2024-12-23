import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import circle from '../../assets/circle.png'
import '../../App.css'
const Header = () => {
  const [mobMenu, setMobMenu] = useState(false)

  return (
    <header className='relative md:relative overflow-hidden bg-primary font-pirate text-secondary shadow-lg'>
      <div className='circle'>
        <img src={circle} alt='circle' />
      </div>
      <div className='p-5 max-w-screen-lg  transition ease-in-out my-0 mx-auto flex items-center justify-between'>
        <Link to='/'>
          <h1 className='text-xl md:text-2xl'>
            Triangles<span className='text-white'>End</span>
          </h1>
        </Link>
        <nav className='hidden md:flex  gap-4 font-medium'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:text-white'
            }
            to='/'
          >
            World of TE
          </NavLink>
          <NavLink
            to='/movies/popular'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:text-white'
            }
          >
            Magic for Hire
          </NavLink>
          <NavLink
            to='/movies/top'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:text-white'
            }
          >
            Volunteer at TE
          </NavLink>
          <NavLink
            to='/movies/upcoming'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:text-white'
            }
          >
            Contact Us
          </NavLink>
        </nav>

        

        <div className='md:hidden'>
          <FaBars
            onClick={() => setMobMenu(!mobMenu)}
            className='text-xl cursor-pointer'
          />
        </div>

        {mobMenu && (
          <div className='absolute top-16 left-0 right-0 z-20 bg-primary px-8 py-4 flex flex-col gap-4 border-t'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white'
              }
              to='/'
            >
              World of TE
            </NavLink>
            <NavLink
              to='/movies/popular'
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white'
              }
            >
              Magic for Hire
            </NavLink>
            <NavLink
              to='/movies/top'
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white'
              }
            >
              Volunteer at TE
            </NavLink>
            <NavLink
              to='/movies/upcoming'
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white'
              }
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
      <div className='below-header'></div>
      <div className='circle-2'>
        <img src={circle} alt='circle' />
      </div>
    </header>
  )
}

export default Header
