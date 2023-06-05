import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'

const Home = () => {
  return (
    <Layout>
      <div>
        <Header page='Home' title='First Launchpad' />
        <div className='bg-background  py-20 rounded-xl'>
          <div className='w-2/3 mx-auto'>
            <img src='https://i.ibb.co/hBS9bSh/BOOK.png' alt='logo' className='w-full object-cover'/>
          </div>
        </div>
        <Counter />
      </div>
    </Layout>
  )
}

export default Home
