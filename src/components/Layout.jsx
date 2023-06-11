import mp4File from '../assets/fallingstar.mp4'
const Layout = ({ children }) => {
  return (
    <div className='layout md:ml-[100px] min-h-screen relative'>
      <div className='container lg:max-w-5xl lg:mx-auto max-w-7xl  md:px-20 md:15 px-5 pb-20 mt-14 md:mt-0 overflow-y-hidden'>
        {children}
      </div>
      <div id='video-background'>
        <video autoPlay loop muted className='h-screen'>
          <source src={mp4File} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Layout
