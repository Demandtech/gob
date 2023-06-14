import Header from '../components/Header'
import Layout from '../components/Layout'
import Presale1 from '../components/PresaleOne'
import Presale2 from '../components/PresaleTwo'
import Presale3 from '../components/PresaleThree'
import Presale4 from '../components/PresaleFour'
import TabsNavigate from '../components/TabsNavigate'
import { useState } from 'react'

const Presale = () => {
  const [activeEl, setActiveEl] = useState(0)
  const totalPage = 3

  const handlePage = (action) => {
    if (action === 'next') {
      if (activeEl < totalPage) {
        setActiveEl(activeEl + 1)
      }
    }

    if (action === 'prev') {
      console.log(action)
      setActiveEl((prev) => prev - 1)
    }
  }
  const presalePage = [
    <Presale1 onclick={handlePage} />,
    <Presale2 onclick={handlePage} />,
    <Presale3 onclick={handlePage} />,
    <Presale4 onclick={handlePage} />,
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
