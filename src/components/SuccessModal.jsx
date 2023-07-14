import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import useModal from '../useModal'

const SuccessModal = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const { handleSetModal, modal } = useModal()
  console.log(modal)

  return (
    <div className=' overflow-hidden w-screen h-screen fixed  top-0 left-0 z-10 bg-red-600/[.1] grid place-content-center'>
      <div className='text-white w-[400px] h-[300px]  md:h-[300px] bg-red md:w-[500px] gold-bg p-5 rounded-lg'>
        <div className='flex justify-end'>
          <button onClick={() => handleSetModal(false)}>
            <FaTimes />
          </button>
        </div>
        <div className=' text-center h-full grid place-content-center'>
          <div>
            <span>LaunchPad created Successcully</span>
          </div>
          <div className='mt-10'>
            <Link
              className=' rounded-md border px-5 py-1 bg-white text-black'
              to={'/launchpads'}
            >
              Launchpad List
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
