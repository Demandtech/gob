import React from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from 'react-icons/hi'

const LocksPagination = ({
  locks,
  setViewPage,
  viewPerPage,
  currentPage,
  setCurrentPage,
  endIndex,
}) => {
  const totalPages = Math.ceil(locks.length / viewPerPage)
  const handleChange = (e) => {
    setViewPage(e.target.value)
  }

  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const next = () => {
    // const totalPages = Math.ceil(locks.length / viewPerPage)
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  return (
    <section className=' flex-col-reverse md:flex-row mt-10 flex justify-center gap-5 items-center'>
      <div className='flex items-center gap-3'>
        <span>Show</span>
        <select
          className='rounded-md p-1'
          name='view'
          id='view'
          onChange={handleChange}
        >
          <option defaultValue value='10'>
            10
          </option>
          <option value='5'>5</option>
          <option value='3'>3</option>
        </select>
        <span>Results</span>
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center'>
          <button
            disabled={currentPage === 0}
            className=' disabled:text-gray-400'
          >
            <HiOutlineChevronDoubleLeft
              className='text-inherit'
              onClick={() => setCurrentPage(0)}
            />
          </button>
          <button
            disabled={currentPage === 0}
            className=' disabled:text-gray-400'
          >
            <GoChevronLeft
              className='text-inherit'
              onClick={() => previous(0)}
            />
          </button>
        </div>
        <div>
          <span className='bg-black w-7 h-7 text-white grid place-content-center rounded-md'>
            {currentPage + 1}
          </span>
        </div>
        <div className='flex items-center'>
          <button
            onClick={() => next()}
            className='disabled:text-gray-400'
            disabled={endIndex >= locks.length}
          >
            <GoChevronRight className=' text-inherit' />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages - 1)}
            className='group disabled:text-gray-400'
            disabled={endIndex >= locks.length}
          >
            <HiOutlineChevronDoubleRight className={`text-inherit`} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default LocksPagination
