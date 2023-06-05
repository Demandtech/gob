import { useState, useRef, useEffect } from 'react'
import menu from '../assets/svgs/menu-icon.svg'
import {
  FaBars,
  FaArrowLeft,
  FaTelegramPlane,
  FaMedium,
  FaChartLine,
} from 'react-icons/fa'
import navArroIcon from '../assets/svgs/nav-arrow-icon.svg'
import { Link } from 'react-router-dom'
import { FiLayout, FiTwitter } from 'react-icons/fi'
import { FcHome } from 'react-icons/fc'
import { SiLaunchpad } from 'react-icons/si'
import { BsPersonLock } from 'react-icons/bs'

const navigation = [
  {
    id: '1111',
    name: 'Home',
    link: '/',
    icon: <FcHome size={20} />,
  },
  {
    id: '2222',
    name: 'LaunchPad',
    child: ['child1', 'child2', 'child3'],
    link: '/locker',
    icon: <SiLaunchpad size={20} />,
  },
  {
    id: '3333',
    name: 'Lock',
    child: ['child1', 'child2', 'child3'],
    link: '/presale',
    icon: <BsPersonLock size={20} />,
  },
  {
    id: '4444',
    name: 'Telegram',
    child: [],
    link: '#',
    icon: <FaTelegramPlane size={20} />,
  },
  {
    id: '5555',
    name: 'Twitter',
    child: [],
    link: '#',
    icon: <FiTwitter size={20} />,
  },
  {
    id: '6666',
    name: 'Twitter',
    child: [],
    link: '#',
    icon: <FaMedium size={20} />,
  },
  {
    id: '7777',
    name: 'Medium',
    child: [],
    link: '#',
    icon: <FaChartLine size={20} />,
  },
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const innerMenuRef = useRef(null)

  function handleSidebar(event) {
    setIsSidebarOpen((prev) => !prev)
  }

  function handleMenuOpen(index) {
    if (isSidebarOpen) {
      setIsMenuOpen(true)
    }
  }

  useEffect(() => {
    let height = innerMenuRef.current.getBoundingClientRect().height
    let height1 = menuRef.current.getBoundingClientRect().height
    console.log(isMenuOpen)
    console.log(height1, height)
    if (isMenuOpen) {
      menuRef.current.style.height = `${height}px`
    } else {
      menuRef.current.style.height = '0px'
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsMenuOpen(false)
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
              <FaBars className='-rotate-45 z-0' />
            </div>
          ) : (
            <div className='icon z-0'>
              <FaArrowLeft />
            </div>
          )}
          <div className='icon absolute top-0 h-full left-0 w-full'></div>
        </button>
        <p className='flex-1'>First Launchpad</p>
      </div>
      <aside
        className={`aside text-primary min-h-screen bottom-0 top-[64px] md:top-0 transition-all duration-300 z-50 absolute md:fixed bg-background`}
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
                  <FaBars className='-rotate-45 icon text-[#100702]' />
                </div>
              ) : (
                <div className='icon text-[#100702]'>
                  <FaArrowLeft />
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
                    onClick={() => handleMenuOpen()}
                    className='menu-item flex gap-5 text-[#100702]'
                  >
                    <div>
                      <button className='w-5'>
                        {nav.icon}
                        {/* <FiLayout size={22} className='text-[#100702]' /> */}
                      </button>
                    </div>
                    {isSidebarOpen && (
                      <Link className='whitespace-nowrap' to={nav.link}>
                        {nav.name}
                      </Link>
                    )}
                  </div>
                  <ul className={`${isMenuOpen ? 'h-full' : 'overflow-hidden h-0'} `} ref={menuRef}>
                    <div ref={innerMenuRef} className=''>
                      {nav.child?.map((navChild, childIndex) => {
                        return (
                          <li className='pl-2 text-[#100702]' key={childIndex}>
                            {navChild}
                          </li>
                        )
                      })}
                    </div>
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
