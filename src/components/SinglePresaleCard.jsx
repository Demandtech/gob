import React from 'react'
import { Link } from 'react-router-dom'
import { BsSuitHeart } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'

const SinglePresaleCard = ({
  leve,
  range,
  img,
  name,
  upcoming,
  eth,
  progress,
  liquidity,
  saleStart,
  lockTime,
  audit,
  kyc,
}) => {
  console.log(progress)
  return (
    <div className='gold-bg mr-3 p-5 rounded-md'>
      <div className='flex justify-between items-center'>
        <img className='w-8 h-8 rounded-full object-cover' src={img} alt='' />
        <div>
          {upcoming === true && (
            <div className='flex items-center gap-2 bg-background px-3 py-1 rounded-xl'>
              <div className='dot'></div>
              <span className={'text-sm text-[#8B4513]'}>Upcoming</span>
            </div>
          )}
          <div className='flex gap-2'>
            <div>{audit === true && <p>Audit</p>}</div>
            <div>{kyc === true && <p>KYC</p>}</div>
          </div>
        </div>
      </div>
      <p className='text-white'>{name}</p>
      <p>{eth}</p>
      <p>{leve}</p>
      <p>{range}</p>
      <p>
        Progress: {'('}
        {progress}.00% {')'}
      </p>
      <div className='w-full bg-white h-1 rounded-md overflow-hidden'>
        <div
          style={{ width: `${progress}%` }}
          className={` bg-black h-full `}
        ></div>
      </div>
      <div className='flex justify-between'>
        <p>0ETH</p> <p>10ETH</p>
      </div>
      <div className='flex justify-between'>
        <p>Liquidity %:</p>
        <p>{liquidity}%</p>
      </div>
      <div className='flex justify-between border-b-2 border-[#8B4513]'>
        <p>Lockup Time:</p>
        <p>{lockTime}%</p>
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <p>Sale Starts In:</p>
          <p>
            <strong>{saleStart}</strong>
          </p>
        </div>
        <div className='flex gap-2'>
          <button>
            <IoMdNotificationsOutline />
          </button>
          <button>
            <BsSuitHeart />{' '}
          </button>
          <Link>View</Link>
        </div>
      </div>
    </div>
  )
}

export default SinglePresaleCard
