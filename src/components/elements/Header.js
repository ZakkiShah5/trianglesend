import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

import '../../App.css'

const Header = () => {
  const [mobMenu, setMobMenu] = useState(false)

  return (
    <header className='md:relative bg-primary font-pirate text-secondary shadow-lg'>
      <div className='p-5 max-w-screen-lg  transition ease-in-out my-0 mx-auto flex items-center justify-between'>
        <Link to='/'>
          <h1 className='text-xl md:text-2xl'>
            Triangles<span className='text-white'>End</span>
          </h1>
        </Link>
        <nav className='hidden md:flex gap-4 font-medium'>
          <div className='relative group'>
            <NavLink
              to='/worldofte'
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white'
              }
            >
              World of TE
            </NavLink>

            <div className='absolute z-30 text-sm w-72 top-5 hidden group-hover:block bg-secondary text-primary mt-1 p-2 rounded shadow-lg'>
              <div className='flex flex-col'>
                <NavLink
                  to='/pirate-adventure'
                  className='py-1 px-3 border-b border-primary'
                >
                  Pirate Adventure at TE
                </NavLink>
                <NavLink
                  to='/custom-adventures'
                  className='py-1 px-3 border-b border-primary'
                >
                  Custom Adventures and Events
                </NavLink>
                <NavLink
                  to='/places'
                  className='py-1 px-3 border-b border-primary'
                >
                  Places at TE
                </NavLink>
                <NavLink to='/stay' className='py-1 px-3'>
                  Stay at TE
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink
            to='/spirit-forge'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:text-white'
            }
          >
            Magic for Hire
          </NavLink>
          <NavLink
            to='/volunteer'
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:text-white'
            }
          >
            Volunteer at TE
          </NavLink>
          <NavLink
            to='/contact'
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
          <div className='absolute top-16 left-0 right-0 z-40 bg-primary px-8 py-4 flex flex-col gap-4 border-t'>
            <div className='relative'>
              {/* Dropdown Trigger */}
              <NavLink
                className='text-secondary hover:text-white font-medium'
                to='worldofte'
              >
                World of TE
              </NavLink>

              {/* Dropdown Menu */}
              
                <div className=' text-sm  text-secondary  mt-1 p-2 rounded'>
                  <div className='flex flex-col'>
                    <NavLink
                      to='/pirate-adventure'
                      className='py-1 px-3 border-b border-secondary hover:bg-primary hover:text-white transition'
                       // Close menu after selecting
                    >
                      Pirate Adventure at TE
                    </NavLink>
                    <NavLink
                      to='/custom-adventures'
                      className='py-1 px-3 border-b border-secondary hover:bg-primary hover:text-white transition'
                      
                    >
                      Custom Adventures and Events
                    </NavLink>
                    <NavLink
                      to='/places'
                      className='py-1 px-3 border-b border-secondary hover:bg-primary hover:text-white transition'
                      
                    >
                      Places at TE
                    </NavLink>
                    <NavLink
                      to='/stay'
                      className='py-1 px-3 hover:bg-primary border-b border-secondary hover:text-white transition'
                      
                    >
                      Stay at TE
                    </NavLink>
                  </div>
                </div>
            </div>
            <NavLink
              to='/spirit-forge'
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white'
              }
              
            >
              Magic for Hire
            </NavLink>
            <NavLink
              to='/volunteer'
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white'
              }
              
            >
              Volunteer at TE
            </NavLink>
            <NavLink
              to='/contact'
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
    </header>
  )
}

export default Header
