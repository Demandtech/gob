
const Layout = ({ children }) => {
  return (
    <div className='layout md:ml-[100px] min-h-screen relative'>
      <div className='container lg:max-w-5xl lg:mx-auto max-w-7xl  md:px-20 md:15 px-5 pb-20 mt-14 md:mt-0 overflow-y-hidden'>
        {children}
      </div>
      <div id='video-background'>    
      </div>
    </div>
  )
}

export default Layout
