import { FaWallet, FaCoins } from 'react-icons/fa'

const Header = ({ title, page }) => {
  return (
    <header className=' py-10 w-full'>
      <div className='flex flex-col md:flex-row items-center text-primary justify-between gap-5'>
        <div>
          <span>First Launchpad</span> / <strong>{page}</strong>
        </div>
        <div className='flex items-center gap-4'>
          <button className='hover:-translate-y-0.5 bg-[#ccb089] text-white px-3 py-1 rounded-md flex items-center gap-2  transition-all delay-150 flex-1'>
            <FaWallet />
            Connect Wallet
          </button>
          <button className='hover:-translate-y-0.5 bg-white text-black px-5 py-1 rounded-md flex items-center gap-2 transition-all delay-150'>
            <FaCoins />
            ETH Chain
          </button>
        </div>
      </div>

      <h1 className='title mt-5 text-center md:text-left text-title text-4xl md:text-5xl font-bold mb-2 '>
        {title}
      </h1>
    </header>
  )
}

export default Header
