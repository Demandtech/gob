import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Locker from './pages/Locker'
import Presale from './pages/Presale'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locker' element={<Locker />} />
        <Route path='/presale' element={<Presale />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
