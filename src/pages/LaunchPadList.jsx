import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Select from '../components/Select'
import Input from '../components/Input'
import LaunchPadCard from '../components/LaunchPadCard'
import { launchpads } from '../data'

const LaunchPadList = () => {
  return (
    <Layout>
      <Header page={'sinlge Presale'} title={'Current Presale'} />
      <BasicTabs />
    </Layout>
  )
}



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

export const BasicTabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [projects, setProjects] = useState(launchpads[activeTab])

  useEffect(() => {
    setProjects(launchpads[activeTab])
  }, [activeTab])
  console.log(activeTab)
  return (
    <section>
      <div className=' justify-center  flex text-white flex-col md:flex-row items-center gap-2 md:gap-10'>
        {['All Launchpad', 'My contribution'].map((tab, index) => {
          return (
            <button
              disabled={index > 0}
              key={index}
              className={`${
                activeTab === index
                  ? 'border-b-2 border-[#ccb089] px-10 md:px-0 text-[#ccb089]'
                  : 'border-b-2 border-gray-500 text-primary px-0'
              } py-2   z-10 transition-all duration-150 disabled:text-gray-400`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
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
        {launchpads.map((pro, index) => {
          console.log(pro)
          return <LaunchPadCard {...pro} key={index} />
        })}
      </div>
    </section>
  )
}

export default LaunchPadList
