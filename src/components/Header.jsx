import { FaWallet, FaCoins } from 'react-icons/fa'

const Header = ({ title, page }) => {
  return (
    <header className=' py-10 w-full'>
      <div className='flex flex-col md:flex-row items-center text-primary justify-between gap-5'>
        <div>
          <span>First Launchpad</span> / <strong>{page}</strong>
        </div>
        <div className='flex gap-4  items-center'>
          <button className='hover:-translate-y-0.5 bg-primary-btn text-white px-2 py-1 rounded-md flex items-center gap-2 hover:bg-[#5cc9eb] transition-all delay-150'>
            <FaWallet />
            Connect Wallet
          </button>
          <button className='hover:-translate-y-0.5 bg-secondary-btn text-white px-2 py-1 rounded-md flex items-center gap-2 transition-all delay-150'>
            <FaCoins />
            ETH Chain
          </button>
        </div>
      </div>
     
        <h1 className='title mt-5 text-center md:text-left text-title text-2xl md:text-4xl font-bold mb-2 '>
          {title}
        </h1>
        
    </header>
  )
}

export default Header
