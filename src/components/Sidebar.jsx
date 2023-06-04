import { useState } from 'react'
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
    link: '/'
  },
  {
    id: '2222',
    name: 'Locker',
    child: ['child1', 'child2', 'child3'],
    link: '/locker'
  },
  {
    id: '3333',
    name: 'Pre Sale',
    child: ['child1', 'child2', 'child3'],
    link: '/presale'
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
  function handleSidebar() {
    setIsSidebarOpen((prev) => !prev)
  }
  function handleMenuOpen(index) {
    setIsMenuOpen(index)
  }
  return (
    <aside
      className={` bg-background text-primary p-5 min-h-screen bottom-0 top-0 transition-all duration-300 ${
        !isSidebarOpen
          ? 'w-14 overflow-hidden absolute '
          : 'md:w-[300px] md:fixed top-0 left-0 bottom-0'
      }`}
    >
      <div className='menu '>
        <div className='mb-10 flex gap-5' onClick={() => handleSidebar()}>
          <button className='h-5' type='button'>
            {!isSidebarOpen ? (
              <FaBars size={22} className='-rotate-45' />
            ) : (
              <div className='w-5'>
                <img className='w-full object-cover' src={navArroIcon} alt='' />
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
  )
}

export default Sidebar
