import Header from '../components/Header'
import Layout from '../components/Layout'
import { Counter } from '../components/Counter'

const Home = () => {
  return (
    <Layout>
      <div>
        <Header page='Home' title='Blue Launchpad' />
        <div className='bg-background flex items-center justify-center py-10 rounded-xl'>
          <div>
            <img src='https://i.ibb.co/wMfTQm9/LOGO2-edit.jpg' alt='' />
          </div>
        </div>
        <Counter />
      </div>
    </Layout>
  )
}

export default Home
