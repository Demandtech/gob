import React, { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { BasicTabs } from './LaunchPadList'
import Input from '../components/Input'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const locks = [
  {
    token: 'Mock Grimance',
    amount: '10,000',
    id: 1,
    decimals: 18,
    address: '0xd0C3268af45780ADf2CbeC83524800e74b06236F',
    locker: '0x9976B633830b6b208E90eE2Afc0D599615e20F27',
    symbol: 'Grimace',
    locked_at: '2023-03-29T08:01 (UTC)',
    unlocks_in: 'Unlockable now',
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    id: 2,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    id: 3,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    Id: 4,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    Id: 5,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    Id: 6,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    Id: 7,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    Id: 8,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    Id: 9,
  },
  {
    token: 'Mock Grimance',
    amount: '10,000',
    Id: 10,
  },
]

const Locks = () => {
  const [activeTab, setActiveTab] = useState(0)
  //const [projects, setProjects] = useState(tabs[activeTab])

  return (
    <Layout>
      <Header title='Current Locks' page='Explore Locks' />
      <section>
        <div className=' justify-center  flex text-white flex-col md:flex-row items-center gap-2 md:gap-10'>
          {['All Active Lock', 'All Unlocked Locks ', 'My Active Lock'].map(
            (tab, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    activeTab === index
                      ? 'border-b-2 border-[#ccb089] px-10 md:px-0 text-[#ccb089] font-extrabold'
                      : 'border-b-2 border-gray-500 text-primary px-0'
                  } py-2   z-10 transition-all duration-150`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              )
            }
          )}
        </div>
        <div className='hidden md:block h-[1.5px] w-full bg-gray-500 -translate-y-0.5'></div>
      </section>
      <section className='py-5 rounded-lg gold-bg mt-10 px-5 md:px-10'>
        <form action='' className='relative'>
          <input
            type='search'
            className='pr-5 pl-[45px] w-full py-2 rounded-md focus:outline-none placeholder:text-gray-500'
            placeholder='Search Lock'
          />
          <button type='submit'>
            <FaSearch className='absolute left-5 top-1/2 -translate-y-1/2' />
          </button>
        </form>
        <table className='w-full mt-10 locks-table'>
          <thead>
            <tr className='border-b '>
              <th className='pb-2 text-left'>Token</th>
              <th className='pb-2 text-left'>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {locks.map((item, index) => {
              return (
                <tr className='border-b' key={index}>
                  <td className=' py-3'>{item.token}</td>
                  <td className=' py-3'>{item.amount}</td>
                  <td className='text-center text-blue-600'>
                    <Link to={`/lock/${item.id}`}>View</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export default Locks
