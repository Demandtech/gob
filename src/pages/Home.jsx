import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'

const Home = () => {
  return (
    <Layout>
      <div>
        <Header page='Home' title='First Launchpad' />
        <div className='rounded-xl home-img overflow-hidden h-[500px]'>
          <div className='w-full h-full'>
            <img
              src='https://i.ibb.co/hBS9bSh/BOOK.png'
              alt='logo'
              className='w-full h-full object-fill '
            />
          </div>
        </div>
        <Counter className='counter' />
      </div>
    </Layout>
  )
}

export default Home
