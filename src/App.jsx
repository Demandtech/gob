import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  StepOne,
  StepTwo,
  StepThree,
  FinalStep,
  Locker,
  Locks,
  SingleLock,
  Home,
  LaunchPadList,
  CreateLaunchPad,
  SingleLaunchpad,
} from './pages'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='locker' element={<Locker />} />

          <Route path='create-launchpad' element={<CreateLaunchPad />}>
            <Route index element={<StepOne />} />
            <Route path='step-two' element={<StepTwo />} />
            <Route path='step-three' element={<StepThree />} />
            <Route path='final-step' element={<FinalStep />} />
          </Route>
          <Route path='/launchpads' element={<LaunchPadList />} />
          {/* <Route path='/explore' element={<Explore />} />
          <Route path='/project' element={<ProjectName />} /> */}
          <Route path='/launchpads/:id' element={<SingleLaunchpad />} />
          <Route path='locks' element={<Locks />} />
          <Route path='/lock/:id' element={<SingleLock />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
