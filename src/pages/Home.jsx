import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'
import img from '../assets/logo.png'
import textPng from '../assets/text.png'
import TypingEffect from '../components/TypingEffect'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <Layout>
      <div className='mb-10'>
        <Header page='Home' title='First Launchpad' />
        <div
          className='rounded-xl home-img overflow-hidden md:h-[500px] goldcardshadow'
          data-aos='zoom-in'
        >
          <div className='w-full h-full'>
            <img
              src={img}
              alt='logo'
              className='w-full h-full object-contain '
              loading='lazy'
            />
          </div>
        </div>
        <Counter className='counter' />
      </div>
    </Layout>
  )
}

export default Home
