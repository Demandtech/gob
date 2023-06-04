import { useState, useRef, useEffect } from 'react'
import menu from '../assets/svgs/menu-icon.svg'
// import {FaBars} from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import navArroIcon from '../assets/svgs/nav-arrow-icon.svg'
import { Link } from 'react-router-dom'

const navigation = [
  {
    id: '1111',
    name: 'Home',
    child: ['child1', 'child2', 'child3'],
    link: '/',
  },
  {
    id: '2222',
    name: 'Locker',
    child: ['child1', 'child2', 'child3'],
    link: '/locker',
  },
  {
    id: '3333',
    name: 'Pre Sale',
    child: ['child1', 'child2', 'child3'],
    link: '/presale',
  },
  {
    id: '4444',
    name: 'Navigation4',
    child: ['child1', 'child2', 'child3'],
  },
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(null)
  const sidebarRef = useRef(null)
  function handleSidebar(event) {
   
    setIsSidebarOpen((prev) => !prev)
  }
  function handleMenuOpen(index) {
    if (isSidebarOpen) {
      setIsMenuOpen(index)
    }
  }
  

  return (
    <>
      <div
        className='bg-background text-primary flex gap-5 md:hidden p-5'
        onClick={(event) => handleSidebar(event)}
      >
        <button className='h-5 ' type='button'>
          {!isSidebarOpen ? (
            <FaBars size={22} className='-rotate-45' />
          ) : (
            <div className='w-5'>
              <img className='w-full object-cover' src={navArroIcon} alt='' />
            </div>
          )}
        </button>
        <p className='text-primary flex-1'>Blue Launchpad</p>
      </div>
      <aside
        id='aside'
        className={`text-primary min-h-screen bottom-0 top-[64px] md:top-0 transition-all duration-300 z-50 absolute md:fixed bg-background`}
        ref={sidebarRef}
      >
        <div
          className={`transition-all duration-150 ${
            !isSidebarOpen
              ? 'w-0 md:w-[60px] md:px-5 pt-5 md:pt-10 overflow-hidden'
              : 'w-screen md:w-[300px] px-5 pt-5 md:pt-10'
          } 
      `}
        >
          <div
            className='mb-10 gap-5 hidden md:flex'
            onClick={(event) => handleSidebar(event)}
          >
            <button className='h-5 ' type='button'>
              {!isSidebarOpen ? (
                <FaBars size={22} className='-rotate-45' />
              ) : (
                <div className='w-5'>
                  <img
                    className='w-full object-cover'
                    src={navArroIcon}
                    alt=''
                  />
                </div>
              )}
            </button>
            <p>Blue Launchpad</p>
          </div>

          <ul className='flex flex-col gap-7'>
            {navigation.map((nav, index) => {
              return (
                <li key={nav.id} className=''>
                  <div
                    onClick={() => handleMenuOpen(index)}
                    className='menu-item flex gap-5'
                  >
                    <div>
                      <button className='w-5'>
                        <img
                          className='w-full object-cover'
                          src={menu}
                          alt={'menu icon'}
                        />
                      </button>
                    </div>
                    <Link to={nav.link}>{nav.name}</Link>
                  </div>
                  <ul
                    className={`${
                      isMenuOpen === index && isSidebarOpen
                        ? 'h-20'
                        : 'h-0 overflow-hidden'
                    } `}
                  >
                    {nav.child.map((navChild, childIndex) => {
                      return (
                        <li className='pl-2' key={childIndex}>
                          {navChild}
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
