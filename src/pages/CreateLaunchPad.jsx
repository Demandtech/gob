import Header from '../components/Header'
import Layout from '../components/Layout'
// import Presale1 from '../components/PresaleOne'
// import Presale2 from '../components/PresaleTwo'
// import Presale3 from '../components/PresaleThree'
// import Presale4 from '../components/PresaleFour'
import TabsNavigate from '../components/TabsNavigate'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const CreateLaunchPad = () => {
  const [activeEl, setActiveEl] = useState(0)
  const totalPage = 3
 
  return (
    <Layout>
      <Header title='Create Presale' page='presale' />
      <TabsNavigate elIndex={activeEl} />
      {/* {presalePage[activeEl]} */}
      <Outlet />
    </Layout>
  )
}

export default CreateLaunchPad
