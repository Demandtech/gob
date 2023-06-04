import Header from '../components/Header'
import Layout from '../components/Layout'
import Presale1 from '../components/Presale1'
import Presale2 from '../components/Presale2'
import Presale3 from '../components/Presale3'
import Presale4 from '../components/Presale4'
import TabsNavigate from '../components/TabsNavigate'
import { useState } from 'react'

const Presale = () => {
  const [activeEl, setActiveEl] = useState(0)

  const handleClick = () => {
    setActiveEl(1)
  }

  const presalePage = [
    <Presale1 onclick={handleClick} />,
    <Presale2 />,
    <Presale3 />,
    <Presale4 />,
  ]
  return (
    <Layout>
      <Header title='Create Presale' page='presale' />
      <TabsNavigate elIndex={activeEl} />
      {presalePage[activeEl]}
    </Layout>
  )
}

export default Presale
