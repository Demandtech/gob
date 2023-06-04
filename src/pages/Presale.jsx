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

  const handlePage = (action) => {
    console.log(action)
    if (action === 'prev') {
      console.log('prev')
      if (activeEl > 0) {
        setActiveEl(activeEl - 1)
      } else {
        setActiveEl(0)
      }
    } else if (action === 'next') {
      console.log('clcicked')
      if (activeEl < presalePage.length - 1) {
        setActiveEl(activeEl + 1)
      } else {
        setActiveEl(activeEl.length - 1)
      }
    }
  }

  const presalePage = [
    <Presale1 onclick={handlePage} />,
    <Presale2 onclick={handlePage} />,
    <Presale3 onclick={handlePage} />,
    <Presale4 onclick={handlePage} />,
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
