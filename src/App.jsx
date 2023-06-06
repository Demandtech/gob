import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Locker from './pages/Locker'
import Presale from './pages/Presale'
import Explore from './pages/Explore'
import ProjectName from './pages/ProjectName'
import SinglePresale from './pages/SinglePresale'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/locker' element={<Locker />} />
          <Route path='/presale' element={<Presale />} />
          <Route path='/single' element={<SinglePresale /> } />
          <Route path='/explore' element={<Explore />} />
          <Route path='/project' element={<ProjectName />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
