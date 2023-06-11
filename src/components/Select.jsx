import React, { useState, useRef, useEffect } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Select = ({ placeholder, option, label, className, blackLabel }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false)

  const [value, setValue] = useState('')
  const containerRef = useRef(null)
  const listcontainerRef = useRef(null)

  useEffect(() => {
    let height = listcontainerRef.current.getBoundingClientRect().height
    if (isOpenSelect) {
      containerRef.current.style.height = `${height}px`
    } else {
      containerRef.current.style.height = `0px`
    }

    const handleOutsideClick = (event) => {
      if (
        isOpenSelect &&
        !event.target.closest('.select') &&
        !event.target.closest('.input')
      ) {
        setIsOpenSelect(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpenSelect])

  

  const handleOptionClick = (option) => {
    setValue(option)
    setIsOpenSelect(false)
  }

  return (
    <div className={`w-full pr-2 relative input-control ${className}`}>
      {label && (
        <label
          className={`mb-1 block  ${blackLabel ? 'text-dark' : 'text-primary'}`}
        >
          {label}
        </label>
      )}
      <div className='relative ' onClick={() => setIsOpenSelect(toggleSelect)}>
        <input
          placeholder={placeholder}
          value={value}
          type='text'
          className='input rounded-md border border-gray700 p-2 w-full focus:outline-none placeholder:'
          readOnly
        />
        <div className='text-gray-300 absolute -translate-y-1/2 top-1/2 right-4'>
          {isOpenSelect ? <FaChevronDown className={''} /> : <FaChevronUp />}
        </div>
      </div>
      <div>
        <div
          ref={containerRef}
          className={`select bg-white mt-2 rounded-md overflow-hidden transition-all duration-150 absolute z-10 right-0 left-0 mr-2 `}
        >
          <ul ref={listcontainerRef} className={`overflow-stroll `}>
            {option?.map((opt, index) => {
              return (
                <li
                  key={index}
                  className={`py-2 hover:bg-[#fdf7f1] cursor-pointer text-black ${
                    isOpenSelect ? 'p-5' : 'opacity-0'
                  }  ${option[index] == index ? 'bg-orange-100' : ''}`}
                  onClick={() => {
                    handleOptionClick(option[index])
                  }}
                >
                  {opt}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Select
