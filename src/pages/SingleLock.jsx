import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { locks } from './Locks'
import Layout from '../components/Layout'
import Header from '../components/Header'

const SingleLock = () => {
  const { id } = useParams()
  const [singleLock, setSingleLock] = useState(null)
  console.log(locks)
  useEffect(() => {
    const lock = locks.find((item) => item.id === +id)
    setSingleLock(lock)
  }, [])
  console.log(singleLock)
  return (
    <Layout>
      <Header title={singleLock?.token} page={singleLock?.token} />
      <div className='mb-3'>
        <Link to='/locks' className='rounded-md bg-blue-400 py-2 px-5'>
          Back
        </Link>
      </div>
      <div className='gold-bg rounded-xl p-5 md:p-10'>
        <div className='flex justify-between flex-wrap py-3 border-b'>
          <strong>Name</strong>
          <p>{singleLock?.token}</p>
        </div>
        <div className='flex justify-between flex-wrap py-3 border-b'>
          <strong>Symbol</strong>
          <p>{singleLock?.symbol}</p>
        </div>
        <div className='flex justify-between flex-wrap py-3 border-b'>
          <strong>Decimal</strong>
          <p>{singleLock?.decimals}</p>
        </div>
        <div className='flex justify-between flex-wrap py-3 border-b'>
          <strong>Address</strong>
          <p>{singleLock?.address}</p>
        </div>
        <div className='flex justify-between flex-wrap py-3 border-b'>
          <strong>Name</strong>
          <p>{singleLock?.locker}</p>
        </div>
        <div className='flex justify-between flex-wrap py-3 border-b'>
          <strong>Amount</strong>
          <p>{singleLock?.amount}</p>
        </div>
        <div className='flex justify-between flex-wrap py-3 border-b'>
          <strong>Locked at</strong>
          <p>{singleLock?.locked_at}</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between py-3'>
          <strong>Unlocked in</strong>
          <p>{singleLock?.unlocks_in}</p>
        </div>
      </div>
    </Layout>
  )
}

export default SingleLock
