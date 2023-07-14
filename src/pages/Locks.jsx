import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { BasicTabs } from './LaunchPadList'
import Input from '../components/Input'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { locks } from '../data'
import LocksPagination from '../components/LocksPagination'

const Locks = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [displayLocks, setDisplayLocks] = useState([])
  const [viewPerPage, setViewPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchQuery, setSearchQUery] = useState('')

  const startIndex = currentPage * viewPerPage
  const endIndex = startIndex + viewPerPage

  const currentLocks = displayLocks.slice(startIndex, endIndex)

  const filterLocks = (tab, index) => {
    setActiveTab(index)
    if (tab === 'All Unlocked Locks') {
      let visibleLogs = locks?.filter((lock) => !lock.lock)
      setDisplayLocks(visibleLogs)
    }
    if (tab === 'All Active Lock') {
      let visibleLogs = locks?.filter((lock) => lock.lock)
      setDisplayLocks(visibleLogs)
    }
    return
  }

  const onsubmit = (event) => {
    event.preventDefault()
    let visibleLogs = []
    if (searchQuery) {
      visibleLogs = locks?.filter((lock) =>
        lock.token.toLocaleLowerCase().startsWith(searchQuery)
      )
      setDisplayLocks(visibleLogs)
    }
    // if (visibleLogs.length > 0) {
    //   setSearchQUery('')
    // }
  }

  const handleChange = (event) => {
    setSearchQUery(event.target.value.toLocaleLowerCase())
  }

  useEffect(() => {
    let visibleLogs = locks?.filter((lock) => lock.lock)
    setDisplayLocks(visibleLogs)
  }, [])

  useEffect(() => {
    if (searchQuery && displayLocks) {
      let visibleLogs = displayLocks?.filter((lock) =>
        lock.token
          .toLocaleLowerCase()
          .startsWith(searchQuery.toLocaleLowerCase())
      )
      setDisplayLocks(visibleLogs)
    }
  }, [displayLocks])

  return (
    <Layout>
      <Header title='Current Locks' page='Explore Locks' />
      <section>
        <div className=' justify-center  flex text-white flex-col md:flex-row items-center gap-2 md:gap-10'>
          {['All Active Lock', 'All Unlocked Locks', 'My Active Lock'].map(
            (tab, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    activeTab === index
                      ? 'border-b-2 border-[#ccb089] px-10 md:px-0 text-[#ccb089] font-extrabold'
                      : 'border-b-2 border-gray-500 text-primary px-0'
                  } py-2   z-10 transition-all duration-150 disabled:text-gray-500`}
                  onClick={() => filterLocks(tab, index)}
                  disabled={index > 1}
                >
                  {tab}
                </button>
              )
            }
          )}
        </div>
        <div className='hidden md:block h-[1.5px] w-full bg-gray-500 -translate-y-0.5'></div>
      </section>
      <section className='py-[48px] rounded-lg gold-bg mt-10 px-5 md:px-10'>
        <form onSubmit={onsubmit} className='relative'>
          <input
            value={searchQuery}
            onChange={handleChange}
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
            {currentLocks.map((item, index) => {
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
        {displayLocks.length < 1 && (
          <div className='text-center py-5'>
            <p>No lock found</p>
          </div>
        )}
        <LocksPagination
          viewPerPage={viewPerPage}
          setViewPage={setViewPerPage}
          setCurrentPage={setCurrentPage}
          locks={displayLocks}
          currentPage={currentPage}
          endIndex={endIndex}
        />
      </section>
    </Layout>
  )
}

export default Locks
