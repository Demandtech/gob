import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'

const LaunchaPadCard = ({
  leve,
  range,
  img,
  name,
  status,
  eth,
  progress,
  liquidity,
  saleStart,
  lockTime,
  audit,
  kyc,
  icon,
}) => {
  const [isLike, setIsLike] = useState(false)
  const statusStyle = `${status === 'Sale Closed' && 'text-[#e928c2]'} ${
    status === 'Success' && 'text-[#48c774]'
  } ${status === 'Sale Canceled' && 'text-[#a0a0a0]'} ${
    status === 'Upcoming' && 'text-[#d29813]'
  } ${status === 'Sale Ended' && 'text-[#ff3465]'}`

  const statusWrapperStyle = `${
    status === 'Sale Closed' && 'bg-[#e928c2]/[.1]'
  } ${status === 'Success' && 'bg-[#48c774]/[.1]'} ${
    status === 'Sale Canceled' && 'bg-[#a0a0a0]/[.1]'
  } ${status === 'Upcoming' && 'bg-[#d29813]/[.1]'} ${
    status === 'Sale Ended' && 'bg-[#ff3465]/[.1]'
  }`

  const dotStyle = `${status === 'Sale Closed' && 'bg-[#e928c2]'} ${
    status === 'Success' && 'bg-[#48c774]'
  } ${status === 'Sale Canceled' && 'bg-[#a0a0a0]'} ${
    status === 'Upcoming' && 'bg-[#d29813]'
  } ${status === 'Sale Ended' && 'bg-[#ff3465]'}`

  return (
    <div className='relative overflow-hidden gold-bg p-5  rounded-md'>
      <div
        className={`absolute top-8 right-0 flex items-center gap-2 ${statusWrapperStyle} px-2 py-1 rounded-tl-2xl rounded-bl-2xl`}
      >
        <div className={`dot ${dotStyle}`}></div>
        <span className={`text-bold ${statusStyle}`}>{status}</span>
      </div>

      <div className='flex gap-2 flex-col '>
        <div className='relative'>
          <img
            className='w-[52px] h-[52px] rounded-full object-cover'
            src={img}
            alt=''
          />
          <div className='w-[20px] absolute left-[38px] bottom-[2px]'>
            <img className='w-full object-contain' src={icon} alt='coin-icon' />
          </div>
        </div>
        <div>
          <div className='flex gap-2'>
            <div>
              {audit === true && (
                <div className='bg-[#00bcd4] text-white px-2 py-1 rounded-md text-sm'>
                  Audit
                </div>
              )}
            </div>
            <div>
              {kyc === true && (
                <div className='bg-[#49c774] text-white px-2 py-1 rounded-md text-sm'>
                  KYC
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className='text-white card-name'>{name}</p>
      <p className='text-[#EAEAEA]'>{eth}</p>
      <div className='text-sm'>
        <p className='font-semibold'>{leve}</p>
        <p className='text-[#f985c4] pt-2 text-xl'>{range}</p>
      </div>
      <p className='text-sm mb-1 mt-2'>
        Progress: {'('}
        {progress}.00% {')'}
      </p>
      <div className='w-full bg-white h-1 rounded-md overflow-hidden text-sm '>
        <div
          style={{ width: `${progress}%` }}
          className={` bg-black h-full `}
        ></div>
      </div>
      <div className='flex justify-between text-sm mb-2'>
        <p>0ETH</p> <p>10ETH</p>
      </div>
      <div className='flex justify-between text-sm'>
        <p>Liquidity %:</p>
        <p>{liquidity}%</p>
      </div>
      <div className='flex justify-between border-b-2 border-[#CCCCCC] text-sm pb-2'>
        <p>Lockup Time:</p>
        <p>{lockTime}%</p>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <div className='text-sm'>
          <p>Sale Starts In:</p>
          <p>
            <strong>{saleStart}</strong>
          </p>
        </div>
        <div className='flex gap-2'>
          <button className='bg-[#11111111] rounded-full px-2 py-2'>
            <IoMdNotificationsOutline className='text-[#8B4513]' />
          </button>
          <button
            onClick={() => setIsLike(!isLike)}
            className='bg-[#11111111] rounded-full px-2 py-2'
          >
            {isLike ? (
              <BsSuitHeartFill className='text-[#8B4513]' />
            ) : (
              <BsSuitHeart className='text-[#8B4513]' />
            )}{' '}
          </button>
          <Link
            to={'/launchpad_list/launchpad'}
            className={'gold-button text-sm p-1'}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LaunchaPadCard
