import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'

const Home = () => {
  return (
    <Layout>
      <div>
        <Header page='Home' title='First Launchpad' />
        <div className='py-20 rounded-xl home-img'>
          <div className='w-2/3 mx-auto'>
            <img
              src='https://i.ibb.co/ZVG5wV1/photo1685955725.jpg'
              alt='logo'
              className='w-full object-cover'
            />
          </div>
        </div>
        <Counter className='counter' />
      </div>
    </Layout>
  )
}

export default Home
