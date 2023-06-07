import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { MdContentCopy } from 'react-icons/md'

export const lineList = [
  {
    tag: 'Manual Listing',
    text: 'Liquidity will not be automatically added',
  },
  {
    tag: 'Presale Address',
    text: '0x1234567890ABCDEF',
  },
  {
    tag: 'Token Name',
    text: 'Token Name',
  },
  {
    tag: 'Token Symbol',
    text: 'TKN',
  },
  {
    tag: 'Token Decimals',
    text: '9',
  },
  {
    tag: 'Token Address',
    text: '0x1234567890ABCDEF',
  },
  {
    tag: 'Total Supply',
    text: '123456789 TKN',
  },
  {
    tag: 'Presale Rate',
    text: '1 ETH = 123456 TKN',
  },
  {
    tag: 'Soft Cap',
    text: '123456789 ETH',
  },
  {
    tag: 'Hard Cap',
    text: '123456789 ETH',
  },
  {
    tag: 'Unsold Tokens',
    text: 'Option used',
  },
  {
    tag: 'Presale Start Time',
    text: '01/02/2023',
  },
  {
    tag: 'Presale End Time',
    text: '01/01/2023',
  },
  {
    tag: 'Liquidity Percent',
    text: '(Manual Listing)',
  },
]

const CenterProjectName = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:gap-5 top-project'>
        <div className='md:w-3/5 border-2 border-[#efd2ad] rounded-md px-4 mt-4 py-8 goldcardshadow'>
          {lineList.map((line, index) => {
            return (
              <Line
                {...line}
                key={index}
                className={'flex-col md:flex-row text-white'}
              />
            )
          })}
        </div>
        <div className='md:w-2/5 pt-5'>
          <LeftTopBox />
          <OwnerSetting />
        </div>
      </div>
      <Status />
    </div>
  )
}

export const Line = ({ tag, text, className, info, wallet }) => {
  return (
    <div
      className={`flex   justify-between border-b border-[#ccb089] py-2 ${className} `}
    >
      <div>
        <p>{tag}</p>
      </div>
      <div className='text-right'>
        <div className='flex justify-end gap-2'>
          <p className={`${wallet && ' text-[#f95e9f]'}`}>{text}</p>
          {wallet && (
            <button>
              <MdContentCopy className='text-[#f95e9f]' />
            </button>
          )}
        </div>
        {info && <p className='text-primary-btn'>{info}</p>}
      </div>
    </div>
  )
}

const LeftTopBox = () => {
  return (
    <div className='text-white space-y-5 border-2 border-[#efd2ad] px-4 py-10 rounded-md mb-3 goldcardshadow'>
      <h2 className='text-3xl font-bold '>Contribute to Presale</h2>
      <p>Max buy: 123 ETH</p>
      <div>
        <div className='mb-4'>
          <Input name='amount' placeholder={'Amount to buy (ETH)'} />
        </div>
        <div className='pr-3'>
          <button className='hover:-translate-y-0.5 bg-[#efd2ad] hover:bg-[#ccb089] text-[#100702] px-3 py-1 rounded-md  transition-all delay-150 w-full text-center mb-5 '>
            Contribute to Presale
          </button>
          <button className='hover:-translate-y-0.5 bg-white text-black px-5 py-1 rounded-md transition-all delay-150 w-full'>
            Emergency Withdraw
          </button>
        </div>
        <p className='pt-5'>Total Contribution: 123 ETH</p>
      </div>
    </div>
  )
}

const OwnerSetting = () => {
  return (
    <div className='text-white pt-10 rounded-md border-2 border-[#efd2ad] px-4 py-5 goldcardshadow'>
      <h2 className='text-3xl font-bold text-center'>Owner settings</h2>

      <div className='flex  gap-10 justify-center py-5'>
        <Input label={'Public'} type='radio' />
        <Input label={'Whitelist'} type='radio' />
      </div>
      <p className='mb-5'>Pool action</p>
      <button className='hover:-translate-y-0.5 bg-[#efd2ad] hover:bg-[#ccb089] text-[#100702] px-3 py-1 rounded-md  transition-all delay-150 w-full text-center mb-5'>
        Finalize
      </button>
      {/* <button className='hover:-translate-y-0.5 bg-[#efd2ad] text-[#100702] px-3 py-1 rounded-md  gtransition-all delay-150 w-full text-center mb-5 hover:bg-[#ccb089] transition-all duration-150'>
        Cancel Pool
      </button> */}
      <button className='hover:-translate-y-0.5 bg-white text-black px-5 py-1 rounded-md transition-all delay-150 w-full btn'>
        Cancel Pool
      </button>
    </div>
  )
}

const Status = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-end  mt-4 gap-5 rounded-md '>
      <div className='md:w-3/5'></div>
      <div className='border-2 border-[#efd2ad] md:w-2/5 w-full px-4 py-5 rounded-md goldcardshadow'>
        <Line className={'text-white'} tag={'Status'} text={'In Progress'} />
        <Line
          className={'text-white'}
          tag={'Sale Type'}
          text={'Whitelist Only'}
        />
        <Line
          className={'text-white'}
          tag={'Minimun Buy'}
          text={'In Progress'}
        />
        <Line
          className={'text-white'}
          tag={'Maximum Buy'}
          text={'In Progress'}
        />
      </div>
    </div>
  )
}

export default CenterProjectName
