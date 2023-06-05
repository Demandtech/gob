import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Locker from './pages/Locker'
import Presale from './pages/Presale'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/locker' element={<Locker />} />
          <Route path='/presale' element={<Presale />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
