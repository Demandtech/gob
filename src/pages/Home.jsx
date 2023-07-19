import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'
import img from '../assets/logo.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <Layout>
      <div className='mb-10'>
        <Header page='Home' title='First Launchpad' />
        <div className=' home-img overflow-hidden  ' data-aos='zoom-in'>
          <div className='flex items-center flex-col w-full overflow-hidden'>
            {/* <img
              src={img}
              alt='logo'
              className='h-full mx-auto'
              loading='lazy'
            /> */}
            <h1 className='main-title text-3xl md:text-6xl'>
              Introducing the Sirius Launchpad Protocol!
            </h1>
            <div className='text-white text-xl md:text-2xl text-center'>
              <p className='mb-5'>
                Empowering everyone to effortlessly create their own tokens and
                conduct token sales in a matter of seconds.
              </p>
              <p>
                With Sirius Launchpad, individuals can swiftly generate tokens
                and organize token sales with ease, ensuring each token's
                verification.
              </p>
            </div>
            <div className='flex flex-col w-full md:w-auto  md:flex-row gap-5 mt-5'>
              <Link
                to={'/create-launchpad'}
                className=' bg-[#ccb089] px-5 py-2 w-full text-center whitespace-nowrap hover:bg-gold-bg font-bold'
              >
                Create LaunchPad
              </Link>

              <Link
                to={'/create-lock'}
                className=' whitespace-nowrap bg-[#ccb089] px-5 py-2 w-full text-center hover:gold-bg font-bold'
              >
                Creat Lock
              </Link>
            </div>
          </div>
        </div>
        <Counter className='counter' />
      </div>
    </Layout>
  )
}

export default Home
