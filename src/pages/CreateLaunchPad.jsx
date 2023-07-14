import Header from '../components/Header'
import Layout from '../components/Layout'
import SuccessModal from '../components/SuccessModal'
import TabsNavigate from '../components/TabsNavigate'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useModal from '../useModal'

const CreateLaunchPad = () => {
  const [activeEl, setActiveEl] = useState(0)
  const location = useLocation()
  const currentPath = location.pathname
  const { modal } = useModal()

 
  return (
    <Layout>
      <Header title='Create Launchpad' page='Launchpads' />
      <TabsNavigate elIndex={activeEl} />
      {/* {presalePage[activeEl]} */}
      <Outlet />
      <div>{modal && <SuccessModal />}</div>
    </Layout>
  )
}

export default CreateLaunchPad
