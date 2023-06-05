import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'
import img from '../assets/logo.png'

const Home = () => {
  return (
    <Layout>
      <div>
        <Header page='Home' title='First Launchpad' />
        <div className='rounded-xl home-img overflow-hidden h-[500px]'>
          <div className='w-full h-full'>
            <img
              src={img}
              alt='logo'
              className='w-full h-full object-contain'
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
