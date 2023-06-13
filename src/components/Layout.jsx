import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function handleSidebar() {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <div className='layout min-h-screen relative'>
      <div className='container lg:mx-auto  pb-20 overflow-y-hidden'>
        <Sidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          handleSidebar={handleSidebar}
        />
      </div>
      <div
        className={` transition-all duration-300 ${
          isSidebarOpen ? 'md:ml-[230px]' : 'md:ml-[60px]'
        }`}
      >
        <div className='page-content mx-auto w-11/12 lg:w-10/12   px-5 md:px-10 lg:px-20  pb-10 '>
          {children}
        </div>
      </div>
      <div id='video-background'></div>
    </div>
  )
}

export default Layout
