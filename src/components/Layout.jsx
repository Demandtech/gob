const Layout = ({ children }) => {
  return (
    <div className='layout md:ml-[100px] min-h-screen'>
      <div className='container lg:max-w-5xl lg:mx-auto max-w-7xl  md:px-20 md:15 px-5 pb-20 overflow-y-hidden'>
        {children}
      </div>
    </div>
  )
}

export default Layout
