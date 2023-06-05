import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'

const Home = () => {
  return (
    <Layout>
      <div>
        <Header page='Home' title='First Launchpad' />
        <div className='rounded-xl home-img overflow-hidden h-[450px]'>
          <div className='w-full h-full'>
            <img
              src='https://i.ibb.co/ZVG5wV1/photo1685955725.jpg'
              alt='logo'
              className='w-full h-full object-contain '
            />
          </div>
        </div>
        <Counter className='counter' />
      </div>
    </Layout>
  )
}

export default Home
