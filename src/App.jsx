import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Locker from './pages/Locker'
import CreateLaunchPad from './pages/CreateLaunchPad'
import Explore from './pages/Explore'
import ProjectName from './pages/ProjectName'
import LaunchPadList from './pages/LaunchPadList'
import SingleLaunchpad from './pages/SingleLaunchpad'
import Locks from './pages/Locks'

import Layout from './components/Layout'
import SingleLock from './pages/SingleLock'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import FinalStep from './components/FinalStep'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='locker' element={<Locker />} />
          {/* <Route path='createLauchpad' element={<CreateLaunchPad />}>
            <Route index path='/step-one' element={<StepOne />} />
            <Route path='/step-two' element={<StepOne />} />
            <Route path='/step-three' element={<StepOne />} />
            <Route path='/final-step' element={<StepOne />} />
          </Route> */}
          <Route path='create-launchpad' element={<CreateLaunchPad />}>
            <Route index element={<StepOne />} />
            <Route path='step-two' element={<StepTwo />} />
            <Route path='step-three' element={<StepThree />} />
            <Route path='final-step' element={<FinalStep />} />
          </Route>
          <Route path='/launchpads' element={<LaunchPadList />} />
          <Route path='explore' element={<Explore />} />
          <Route path='project' element={<ProjectName />} />
          <Route path='/launchpads/:id' element={<SingleLaunchpad />} />
          <Route path='locks' element={<Locks />} />
          <Route path='/lock/:id' element={<SingleLock />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
