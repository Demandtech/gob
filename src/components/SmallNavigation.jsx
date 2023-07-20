import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const SmallNavigation = ({ position, onMouseEnter, onMouseLeave, data }) => {
  const navRef = useRef(null)
  useEffect(() => {
    navRef.current.style.transition = 'all 0.3s linear'

    if (position) {
      navRef.current.style.top = `${position}px`
      navRef.current.style.left = `60px`
      navRef.current.style.opacity = 1
    } else {
      navRef.current.style.left = `-64px`
      navRef.current.style.opacity = 0
      // navRef.current.style.top = '0px'
    }
  }, [position])

  return (
    <ul
      ref={navRef}
      className={`gold-bg absolute text-sm z-10 opacity-0 transition-all duration-300 min-w-[200px] py-5 rounded-md text-[#8B4513] ${
       position && ' opacity-100'
     }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {data.info.map((inf, index) => {
        return (
          <li key={index} className='px-5 py-2'>
            <Link to={inf.url}>{inf.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SmallNavigation
