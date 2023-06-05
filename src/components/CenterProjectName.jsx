import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const lineList = [
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
        <div className='md:w-3/5 border-2 border-white rounded-md px-4 mt-4'>
          {lineList.map((line, index) => {
            return (
              <Line {...line} key={index} className={'flex-col md:flex-row text-white'} />
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

export const Line = ({ tag, text, className }) => {
  return (
    <div
      className={`flex   justify-between border-b border-[#ccb089] py-3 ${className}`}
    >
      <p>{tag}</p>
      <p>{text}</p>
    </div>
  )
}

const LeftTopBox = () => {
  return (
    <div className='text-white space-y-5 border-2 border-white px-4 py-10 rounded-md mb-3'>
      <h2 className='text-3xl font-bold '>Contribute to Presale</h2>
      <p>Max buy: 123 ETH</p>
      <div>
        <Input name='amount' placeholder={'Amount to buy (ETH)'} />
        <div>
          <button className='hover:-translate-y-0.5 bg-[#ccb089] text-[#100702] px-3 py-1 rounded-md  gtransition-all delay-150 w-full text-center mb-5'>
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
    <div className='text-white pt-10 rounded-md border-2 border-white px-4 py-5'>
      <h2 className='text-3xl font-bold text-center'>Owner settings</h2>

      <div className='flex  gap-10 justify-center py-5'>
        <Input label={'Public'} type='radio' />
        <Input label={'Whitelist'} type='radio' />
      </div>
      <p className='mb-5'>Pool action</p>
      <button className='hover:-translate-y-0.5 bg-[#ccb089] text-[#100702] px-3 py-1 rounded-md  gtransition-all delay-150 w-full text-center mb-5'>
        Finalize
      </button>
      <button className='hover:-translate-y-0.5 bg-[#ccb089] text-[#100702] px-3 py-1 rounded-md  gtransition-all delay-150 w-full text-center mb-5'>
        Cancel Pool
      </button>
    </div>
  )
}

const Status = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-end  border-white  mt-4 gap-5'>
      <div className='md:w-3/5'></div>
      <div className='md:w-2/5 w-full border-2 px-4 py-5 rounded-md'>
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
