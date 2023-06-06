import React from 'react'

const SinglePresaleCard = ({ img, name, upcoming }) => {
  return (
    <div className='bg-primary mr-3 p-5 rounded-xl'>
      <div className='flex justify-between'>
        <img className='w-8 h-8 rounded-full object-cover' src={img} alt='' />

        {upcoming && (
          <div>
            <span className={'text-sm'}>Upcoming</span>
          </div>
        )}
      </div>
        <p className='text-white'>{name}</p>
    </div>
  )
}

export default SinglePresaleCard
