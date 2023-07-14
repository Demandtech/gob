import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Select from '../components/Select'
import Input from '../components/Input'
import LaunchPadCard from '../components/LaunchPadCard'

import bnbSvg from '../assets/svgs/bnb.svg'
import ethSvg from '../assets/svgs/ethereum.svg'

const LaunchPadList = () => {
  return (
    <Layout>
      <Header page={'sinlge Presale'} title={'Current Presale'} />
      <BasicTabs tabList={tabs} />
    </Layout>
  )
}

const tabs = [
  {
    title: 'All Launchpads',
    projects: [
      {
        name: 'DOGFOOD',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'SoftCap/HardCap',
        status: 'Success',
        range: '5 ETH - 10EH',
        progress: 0,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: true,
        kyc: true,
        icon: bnbSvg,
      },
      {
        name: 'Advance Mode 2',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'SoftCap/HardCap',
        status: 'Sale Closed',
        range: '5 ETH - 10EH',
        progress: 0,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: true,
        kyc: true,
        icon: ethSvg,
      },
      {
        name: 'Advance Mode 3',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'SoftCap/HardCap',
        status: 'Upcoming',
        range: '5 ETH - 10EH',
        progress: 89,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: true,
        kyc: false,
        icon: ethSvg,
      },
      {
        name: 'Contributor One',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'SoftCap/HardCap',
        status: 'Sale Canceled',
        range: '5 ETH - 10EH',
        progress: 0,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: false,
        kyc: true,
        icon: bnbSvg,
      },
      {
        name: 'Contributor Two',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'SoftCap/HardCap',
        status: 'Sale Ended',
        range: '5 ETH - 10EH',
        progress: 10,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: true,
        kyc: true,
        icon: bnbSvg,
      },
      {
        name: 'Contributor Three',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'SoftCap/HardCap',
        status: 'Upcoming',
        range: '5 ETH - 10EH',
        progress: 11,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: false,
        kyc: false,
        icon: ethSvg,
      },
      {
        name: 'Contributor Four',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'SoftCap/HardCap',
        status: 'Sale Canceled',
        range: '5 ETH - 10EH',
        progress: 50,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: false,
        kyc: true,
        icon: ethSvg,
      },
    ],
  },
  // {
  //   title: 'Advanced Mode',
  //   projects: [
  //     {
  //       name: 'Advance Mode 1',
  //       img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  //       eth: '6,300,000,000 DOGFOOD',
  //       leve: 'Soft/Hard',
  //       upcoming: true,
  //       range: '5 ETH - 10EH',
  //       progress: 0,
  //       liquidity: 51,
  //       lockTime: '90days',
  //       saleStart: '00:01:19',
  //       audit: false,
  //       kyc: true,
  //       icon: ethSvg,
  //     },
  //     {
  //       name: 'Advance Mode 2',
  //       img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  //       eth: '6,300,000,000 DOGFOOD',
  //       leve: 'Soft/Hard',
  //       upcoming: true,
  //       range: '5 ETH - 10EH',
  //       progress: 0,
  //       liquidity: 51,
  //       lockTime: '90days',
  //       saleStart: '00:01:19',
  //       audit: true,
  //       kyc: true,
  //       icon: bnbSvg,
  //     },
  //     {
  //       name: 'Advance Mode 3',
  //       img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  //       eth: '6,300,000,000 DOGFOOD',
  //       leve: 'Soft/Hard',
  //       upcoming: true,
  //       range: '5 ETH - 10EH',
  //       progress: 0,
  //       liquidity: 51,
  //       lockTime: '90days',
  //       saleStart: '00:01:19',
  //       audit: true,
  //       kyc: true,
  //       icon: bnbSvg,
  //     },
  //   ],
  // },
  {
    title: 'My Contributions',
    projects: [
      {
        name: 'Contributor One',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'Success',
        status: 'Sale Ended',
        range: '5 ETH - 10EH',
        progress: 0,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: false,
        kyc: true,
        icon: ethSvg,
      },
      {
        name: 'Contributor Two',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'Soft/Hard',
        status: 'Sale Canceled',
        range: '5 ETH - 10EH',
        progress: 0,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: true,
        kyc: true,
        icon: ethSvg,
      },
      {
        name: 'Contributor Three',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'Soft/Hard',
        status: 'Sale Ended',
        range: '5 ETH - 10EH',
        progress: 0,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: false,
        kyc: true,
        icon: bnbSvg,
      },
      {
        name: 'Contributor Four',
        img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
        eth: '6,300,000,000 DOGFOOD',
        leve: 'Soft/Hard',
        status: 'Sale Closed',
        range: '5 ETH - 10EH',
        progress: 0,
        liquidity: 51,
        lockTime: '90days',
        saleStart: '00:01:19',
        audit: true,
        kyc: false,
        icon: bnbSvg,
      },
    ],
  },
]

export const option = {
  filterBy: [
    'No Filter',
    'KYC',
    'Upcoming',
    'Progress',
    'Filled',
    'Ended',
    'Cancelled',
  ],
  sortBy: [
    'No Filter',
    'Hard Cap',
    'Soft Cap',
    'Lp percent',
    'Start time',
    'End time',
  ],
  chain: [
    'No Filter',
    'BSC',
    'Ethereum',
    'Polygon',
    'Avalanche',
    'Fantom',
    'Cronos',
    'DOGE',
  ],
}

export const BasicTabs = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [projects, setProjects] = useState(tabs[activeTab])

  useEffect(() => {
    setProjects(tabs[activeTab])
  }, [activeTab])
  console.log(activeTab)
  return (
    <section>
      <div className=' justify-center  flex text-white flex-col md:flex-row items-center gap-2 md:gap-10'>
        {tabList.map((tab, index) => {
          return (
            <button
              key={index}
              className={`${
                activeTab === index
                  ? 'border-b-2 border-[#ccb089] px-10 md:px-0 text-[#ccb089]'
                  : 'border-b-2 border-gray-500 text-primary px-0'
              } py-2   z-10 transition-all duration-150`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          )
        })}
      </div>

      <div className='hidden md:block h-[1.5px] w-full bg-gray-500 -translate-y-0.5'></div>
      {/* <div className='mt-10 flex items-end flex-col md:flex-row'>
        <div className='md:w-1/3 lg:w-3/4 w-full mb-2 md:mb-0'>
          <Input
            placeholder={'Enter token name or token symbol'}
            className={'mb-0'}
          />
        </div>
        <div className='flex items-center flex-col md:flex-row w-full md:w-2/3 pr-1 gap-3'>
          <Select
            option={option.filterBy}
            label={'Filter By'}
            placeholder={'All status'}
            className={'text-dark'}
          />
          <Select
            option={option.sortBy}
            label={'Sort By'}
            placeholder={'All status'}
            className={'ttext-dark'}
          />
          <Select
            option={option.chain}
            label={'Chain'}
            placeholder={'All status'}
            className={'text-dark'}
          />
        </div>
      </div> */}
      <div className='pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {projects.projects.map((pro, index) => {
          console.log(pro)
          return <LaunchPadCard {...pro} key={index} />
        })}
      </div>
    </section>
  )
}

export default LaunchPadList
