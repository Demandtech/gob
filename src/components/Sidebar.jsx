import { useState, useRef, useEffect } from 'react'
import menu from '../assets/svgs/menu-icon.svg'
import {
  FaBars,
  FaArrowLeft,
  FaTelegramPlane,
  FaMedium,
  FaChartLine,
  FaChevronDown,
  FaChevronRight,
} from 'react-icons/fa'
import { AiOutlineMenuUnfold, AiOutlineMenu } from 'react-icons/ai'
import navArroIcon from '../assets/svgs/nav-arrow-icon.svg'
import { Link } from 'react-router-dom'
import { FiLayout, FiTwitter } from 'react-icons/fi'
import { FcHome } from 'react-icons/fc'
import { SiLaunchpad } from 'react-icons/si'
import { BsPersonLock } from 'react-icons/bs'
import SmallNavigation from './SmallNavigation'

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

const Sidebar = ({ isSidebarOpen, handleSidebar, setIsSidebarOpen }) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false)
  const menuRef = useRef(null)
  const innerMenuRef = useRef(null)
  const [disableScroll, setDisableScroll] = useState(false)

  const [showSmallNav, setShowSmallNav] = useState(false)
  const [position, setPosition] = useState(null)

  const [isMouseEnterSmallMenu, setisMouseEnterSmallMenu] = useState({
    status: false,
    info: [
      { text: '', url: '' },
      { text: '', url: '' },
    ],
  })

  const menuRefTwo = useRef(null)
  const innerMenuRefTwo = useRef(null)

  // function handleSidebar(event) {
  //   setIsSidebarOpen((prev) => !prev)
  // }

  function handleMenuOpen(index) {
    if (isSidebarOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }

  function handleMenuOpenTwo(index) {
    if (isSidebarOpen) {
      setIsMenuOpenTwo(!isMenuOpenTwo)
    }
  }

  useEffect(() => {
    let height = innerMenuRef.current.getBoundingClientRect().height
    let height1 = menuRef.current.getBoundingClientRect().height

    if (isMenuOpen) {
      // menuRefTwo.current.style.height = '0px'
      setIsMenuOpenTwo(false)
      menuRef.current.style.height = `${height}px`
    } else {
      menuRef.current.style.height = '0px'
    }
  }, [isMenuOpen])

  useEffect(() => {
    let height = innerMenuRefTwo.current.getBoundingClientRect().height
    let height1 = menuRefTwo.current.getBoundingClientRect().height

    if (isMenuOpenTwo) {
      // menuRef.current.style.height = '0px'
      setIsMenuOpen(false)
      menuRefTwo.current.style.height = `${height}px`
    } else {
      menuRefTwo.current.style.height = '0px'
    }
  }, [isMenuOpenTwo])

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsMenuOpen(false)
      setIsMenuOpenTwo(false)
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

  const handleMouseEnter = () => {
    setDisableScroll(true)
  }

  const handleMouseLeave = () => {
    setDisableScroll(false)
  }

  const handleTouchStart = () => {
    setDisableScroll(true)
  }

  const handleTouchEnd = () => {
    setDisableScroll(false)
  }

  if (disableScroll) {
    document.body.classList.add('disable-scroll')
  } else {
    document.body.classList.remove('disable-scroll')
  }

  const handleOpenSmallMenu = (e, payload) => {
    setPosition(e.target.offsetTop)
    setShowSmallNav(payload)
     
  }

  const handleCloseSmallMenu = (payload) => {
    if (!isMouseEnterSmallMenu) {
      setShowSmallNav({ ...showSmallNav, status: payload })
    }
  }

  return (
    <>
      <div
        className='top-aside text-[#100702] flex items-center right-0 left-0 top-0 gap-5 md:hidden py-5  z-50 text-xl hamburger fixed'
        onClick={(event) => handleSidebar(event)}
      >
        <button
          className='h-5 w-5 z-10 icon grid place-items-center relative px-5'
          type='button'
        >
          {!isSidebarOpen ? (
            <div className='icon'>
              <AiOutlineMenu className='z-0' />
            </div>
          ) : (
            <div className='icon z-0'>
              <AiOutlineMenuUnfold />
            </div>
          )}
          <div className='icon absolute top-0 h-full left-0 w-full'></div>
        </button>
        <p className='flex-1'>First Launchpad</p>
      </div>
      {showSmallNav.status && !isSidebarOpen && (
        <SmallNavigation
          onMouseEnter={() => setisMouseEnterSmallMenu(true)}
          onMouseLeave={() => {
            setShowSmallNav({...showSmallNav, status: false})
            setisMouseEnterSmallMenu(false)
          }}
          position={position}
          data={showSmallNav}
        />
      )}
      <aside
        className={`aside text-primary min-h-screen   transition-all duration-300 z-50 fixed  top-[68px] border-[#bba07b] border-t-2 md:border-t-0 flex flex-col md:top-0 ${
          !isSidebarOpen ? 'w-0 md:w-[60px] overflow-hidden' : 'w-[230px] '
        } `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`transition-all h-full duration-300 sticky ${
            !isSidebarOpen
              ? 'w-0 md:w-[60px] pt-5 md:pt-10 overflow-hidden'
              : 'w-[230px] pt-5 md:pt-10'
          } 
      `}
        >
          <div
            className='mb-10 gap-5 hidden md:flex items-center pl-5 hamburger text-xl'
            onClick={(event) => handleSidebar(event)}
          >
            <button className='h-10 relative' type='button'>
              {!isSidebarOpen ? (
                <div className='icon'>
                  <AiOutlineMenu className='icon text-[#100702]' />
                </div>
              ) : (
                <div className='icon text-[#100702]'>
                  <AiOutlineMenuUnfold />
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

          <ul className='flex flex-col text-[#100702] '>
            <li className='flex gap-5 mb-5 cursor-pointer px-5 hover:text-[#8B4513]'>
              <div>
                <FcHome size={20} />
              </div>
              <Link onClick={() => setIsSidebarOpen(false)} to={'/'}>
                Home
              </Link>
            </li>
            <li
              className={` gap-2  mb-5 px-5 py-1 hover:text-[#8B4513] transition-all duration-300 ${
                isMenuOpen ? 'bg-[#ccab72] drop-down' : 'bg-dark'
              } `}
              onClick={handleMenuOpen}
            >
              <div className='flex gap-2 items-center cursor-pointer'>
                <div
                  className='flex gap-5 items-center'
                  onMouseEnter={(e) =>
                    handleOpenSmallMenu(e, {
                      status: true,
                      info: [
                        {
                          text: 'Create LaunchPad',
                          url: '/create-launchpad',
                        },
                        {
                          text: 'LaunchPad List',
                          url: '/launchpads',
                        },
                      ],
                    })
                  }
                  onMouseLeave={() => handleCloseSmallMenu(false)}
                >
                  <div>
                    <SiLaunchpad size={20} />
                  </div>
                  <span>LaunchPad</span>
                </div>
                <div className='relative'>
                  {isMenuOpen ? (
                    <FaChevronDown size={10} />
                  ) : (
                    <FaChevronRight size={10} />
                  )}
                  <div className='absolute top-0 h-full w-full'></div>
                </div>
              </div>
              <div
                ref={menuRef}
                className='overflow-hidden transition-all duration-150'
              >
                <ul
                  ref={innerMenuRef}
                  className={`pl-10 ${
                    isMenuOpen
                      ? ' py-1 border-black transition-all duration-300 '
                      : 'bg-dark font-normal'
                  }`}
                >
                  <li>
                    <Link
                      onClick={() => setIsSidebarOpen(false)}
                      to={'/create-launchpad'}
                    >
                      Create Launchpad
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => setIsSidebarOpen(false)}
                      to='/launchpads'
                    >
                      Launchpad List
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li
              onClick={handleMenuOpenTwo}
              className={`mb-5 px-5 py-1 hover:text-[#8B4513] transition-all duration-150 ${
                isMenuOpenTwo ? 'drop-down bg-[#ccab72]' : 'bg-dark'
              }`}
            >
              <div className='flex gap-2 items-center cursor-pointer'>
                <div
                  className='flex gap-5 items-center'
                  onMouseEnter={(e) =>
                    handleOpenSmallMenu(e, {
                      status: true,
                      info: [
                        {
                          text: 'Create Lock',
                          url: '/create-lock',
                        },
                        {
                          text: 'Lock List',
                          url: '/locks',
                        },
                      ],
                    })
                  }
                  onMouseLeave={() => handleCloseSmallMenu(false)}
                >
                  <div>
                    <BsPersonLock size={20} />
                  </div>
                  <span>Lock</span>
                </div>
                <div className='relative'>
                  {isMenuOpenTwo ? (
                    <FaChevronDown size={10} />
                  ) : (
                    <FaChevronRight size={10} />
                  )}
                  <div className='absolute top-0 h-full w-full'></div>
                </div>
              </div>
              <div
                ref={menuRefTwo}
                className='overflow-hidden transition-all duration-300'
              >
                <ul ref={innerMenuRefTwo} className={`pl-10 pt-1 `}>
                  <li>
                    <Link
                      onClick={() => setIsSidebarOpen(false)}
                      to='/create-lock'
                    >
                      Create Lock
                    </Link>
                  </li>

                  <li>
                    <Link onClick={() => setIsSidebarOpen(false)} to='/locks'>
                      Lock List
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className='hover:text-[#8B4513] transition-all duration-150 flex gap-5 mb-5 cursor-pointer px-5'>
              <div>
                <FaTelegramPlane size={20} />
              </div>
              <span>Telegram</span>
            </li>
            <li className='hover:text-[#8B4513] transition-all duration-150 flex gap-5 mb-5 cursor-pointer px-5'>
              <div>
                <FiTwitter size={20} />
              </div>
              <Link>Twitter</Link>
            </li>
            <li className='hover:text-[#8B4513] transition-all duration-150 flex gap-5 mb-5 cursor-pointer px-5'>
              <div>
                <FaMedium size={20} />
              </div>
              <Link>Medium</Link>
            </li>
            <li className='hover:text-[#8B4513] transition-all duration-150 flex gap-5 cursor-pointer px-5'>
              <div>
                <FaChartLine size={20} />
              </div>
              <Link className='whitespace-nowrap'>$SIRIUS Chart</Link>
            </li>
          </ul>
        </div>
        {isSidebarOpen && (
          <div className='mt-auto md:bottom-5 px-5 text-gray-400 whitespace-nowrap text-sm text-center pb-20 md:pb-5'>
            <p
              className={`transition-opacity duration-300 ${
                isSidebarOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              $Sirius <span>Copyright &copy;</span> {new Date().getFullYear()}
            </p>
          </div>
        )}
      </aside>
    </>
  )
}

export default Sidebar
