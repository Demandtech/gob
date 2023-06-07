import React from 'react'
import topImg from '../assets/topproject-img.png'

const TopProjectName = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 top-project border-[#efd2ad] pb-10 bg-[#100702] border-2 px-3 pt-3 rounded-md goldcardshadow'>
      <div className='md:w-3/5'>
        <img src={topImg} alt='image' className='w-full mb-4' />
        <p className='text-white'>
          (Description) Lorem ipsum dolor sit amet this is a sample text just as
          a placeholder, sample text good morning to you all more verbose text
          and words with just nonsense
        </p>
        <div className='flex gap-4 mt-5 '>
          <div className='w-8 h-8 bg-[#ccb089] rounded-full text-white'></div>
          <div className='w-8 h-8 bg-[#ccb089] rounded-full text-white'></div>
          <div className='w-8 h-8 bg-[#ccb089] rounded-full text-white'></div>
          <div className='w-8 h-8 bg-[#ccb089] rounded-full text-white'></div>
          <div className='w-8 h-8 bg-[#ccb089] rounded-full text-white'></div>
          <div className='w-8 h-8 bg-[#ccb089] rounded-full text-white'></div>
          <div className='w-8 h-8 bg-[#ccb089] rounded-full text-white'></div>
        </div>
      </div>
      <div className='md:w-2/5 text-white pt-5'>
        <div className='h-1 w-full bg-white mb-5'>
          <div className='w-1/2 bg-[#ccb089] h-full'></div>
        </div>
        <div className='mb-5'>
          <h3 className='text-2xl font-bold text-[#ccb089]'> 123.456789 ETH</h3>
          <p>Contributed out of 12345 ETH (Hard Cap)</p>
          <p>To go: 123456 ETH (Soft Cap)</p>
        </div>
        <div className='mb-3'>
          <h3 className='text-2xl font-bold'>0 ETH</h3>
          <p>Your contribution</p>
        </div>
        <div className='mb-3'>
          <h3 className='text-2xl font-bold'>123</h3>
          <p>Total Contribution</p>
        </div>
        <div>
          <h3 className='text-2xl font-bold'>00 H : 00 M : 00 S</h3>
          <p>Time remaining</p>
        </div>
      </div>
    </div>
  )
}

export default TopProjectName
