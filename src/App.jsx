import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Locker from './pages/Locker'
import Presale from './pages/Presale'
import Explore from './pages/Explore'
import ProjectName from './pages/ProjectName'
import LaunchPadList from './pages/LaunchPadList'
import SingleLaunchpad from './pages/SingleLaunchpad'
import Locks from './pages/Locks'

import Layout from './components/Layout'
import SingleLock from './pages/SingleLock'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='locker' element={<Locker />} />
          <Route path='presale' element={<Presale />} />
          <Route path='/launpad_list' element={<LaunchPadList />} />
          <Route path='explore' element={<Explore />} />
          <Route path='project' element={<ProjectName />} />
          <Route
            path='/launchpad_list/launchpad'
            element={<SingleLaunchpad />}
          />
          <Route path='locks' element={<Locks />} />
          <Route path='/lock/:id' element={<SingleLock />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
