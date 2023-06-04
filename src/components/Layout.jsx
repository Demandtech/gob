

const Layout = ({ children }) => {
  return (
    <div className='layout bg-[#0c2d36] min-h-screen'>
      <div className='container lg:max-w-5xl lg:mx-auto max-w-7xl  md:px-20 md:15 px-10 pb-20 overflow-y-hidden'>
        {children}
      </div>
      <div className="gradient"></div>
      <div className="gradient2"></div>
    </div>
  )
}

export default Layout
