import { useState, useRef, useEffect } from 'react'
import menu from '../assets/svgs/menu-icon.svg'
import { FaBars, FaArrowLeft } from 'react-icons/fa'
import navArroIcon from '../assets/svgs/nav-arrow-icon.svg'
import { Link } from 'react-router-dom'
import { FiLayout } from 'react-icons/fi'

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

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsMenuOpen(null)
    }
    const handleOutsideClick = (event) => {
      if (
        isSidebarOpen &&
        !event.target.closest('.aside') &&
        !event.target.closest('.icon')
      ) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [isSidebarOpen])

  return (
    <>
      <div
        className='bg-background text-[#100702] flex items-center  gap-5 md:hidden p-5'
        onClick={(event) => handleSidebar(event)}
      >
        <button
          className='h-5 w-5 z-10 icon grid place-items-center relative'
          type='button'
        >
          {!isSidebarOpen ? (
            <div className='icon'>
              <FaBars size={22} className='-rotate-45 z-0' />
            </div>
          ) : (
            <div className='icon z-0'>
              <FaArrowLeft size={22} />
            </div>
          )}
          <div className='icon absolute top-0 h-full left-0 w-full'></div>
        </button>
        <p className='flex-1'>First Launchpad</p>
      </div>
      <aside
        className={`aside text-primary min-h-screen bottom-0 top-[64px] md:top-0 transition-all duration-300 z-50 absolute md:fixed bg-background`}
        ref={sidebarRef}
      >
        <div
          className={`transition-all duration-150 ${
            !isSidebarOpen
              ? 'w-0 md:w-[60px] md:px-5 pt-5 md:pt-10 overflow-hidden'
              : 'w-[200px] px-5 pt-5 md:pt-10'
          } 
      `}
        >
          <div
            className='mb-10 gap-5 hidden md:flex items-center'
            onClick={(event) => handleSidebar(event)}
          >
            {/* I get Outside as console output when I click on this button and this button is inside aside element that I added event listener to */}
            <button className='h-10 relative' type='button'>
              {!isSidebarOpen ? (
                <div className='icon'>
                  <FaBars
                    size={22}
                    className='-rotate-45 icon text-[#100702]'
                  />
                </div>
              ) : (
                <div className='icon text-[#100702]'>
                  <FaArrowLeft size={22} />
                </div>
              )}
              <div className='icon absolute top-0 h-full left-0 w-full'></div>
            </button>
            {isSidebarOpen && (
              <p className='text-[#100702] whitespace-nowrap'>
                First Launchpad
              </p>
            )}
          </div>

          <ul className='flex flex-col gap-7'>
            {navigation.map((nav, index) => {
              return (
                <li key={nav.id} className=''>
                  <div
                    onClick={() => handleMenuOpen(index)}
                    className='menu-item flex gap-5 text-[#100702]'
                  >
                    <div>
                      <button className='w-5'>
                        <FiLayout size={22} className='text-[#100702]' />
                      </button>
                    </div>
                    {isSidebarOpen && (
                      <Link className='whitespace-nowrap' to={nav.link}>
                        {nav.name}
                      </Link>
                    )}
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
                        <li className='pl-2 text-[#100702]' key={childIndex}>
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
