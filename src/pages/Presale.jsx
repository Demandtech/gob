import Header from '../components/Header'
import Layout from '../components/Layout'
import TabsNavigate from '../components/TabsNavigate'
import { useState } from 'react'
const Presale = () => {
 const [activeEl, setActiveEl] = useState(0)
  return (
    <Layout>
      <Header title='Create Presale' page='presale' />
      <TabsNavigate elIndex={activeEl}/>
    </Layout>
  )
}

export default Presale
