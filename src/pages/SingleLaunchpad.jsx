import Layout from '../components/Layout'
import Header from '../components/Header'
import { Line } from '../components/CenterProjectName'
import { TfiWorld, TfiTwitter } from 'react-icons/tfi'
import { CiFacebook } from 'react-icons/ci'
import { TbBrandTelegram } from 'react-icons/tb'
import { BsSuitHeartFill, BsSuitHeart, BsCheck } from 'react-icons/bs'

import ethSvg from '../assets/svgs/ethereum.svg'
import { useState } from 'react'

const project = {
  name: 'DOGFOOD',
  img: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
  eth: '6,300,000,000 DOGFOOD',
  leve: 'Soft/Hard',
  upcoming: false,
  range: '5 ETH - 10EH',
  progress: 10.6,
  liquidity: 51,
  lockTime: '90days',
  saleStart: '00:01:19',
  audit: true,
  kyc: true,
  icon: ethSvg,
  desc: 'Assertively foster leading-edge outsourcing with low-risk high-yield collaboration and idea-sharing. Dynamically benchmark timely supply chains through top-line ideas. Credibly pursue mission-critical strategic theme areas with cutting-edge communities. Credibly incentivize reliable experiences vis-a-vis tactical solutions. Distinctively recaptiualize front-end ',
  social: [<TfiWorld />, <TfiTwitter />, <CiFacebook />, <TbBrandTelegram />],
  status: 'Inprogress',
  rate: '1 BNB = 6,249, 999 ETH',
  contributors: 2,
  purchased: '0 BNB',
}

export const lineList = [
  {
    tag: 'Presale Address',
    text: '0x1234c678d0dBddEFDU80XPSJDu',
    wallet: true,
  },
  {
    tag: 'Token Name',
    text: 'DOGFOOD',
  },
  {
    tag: 'Token Symbol',
    text: 'ANON',
  },
  {
    tag: 'Token Decimals',
    text: '9',
  },
  {
    tag: 'Token Address',
    text: '0x1234567890ABCDEF',
    info: 'Do not send BNB to the token address',
    wallet: true,
  },
  {
    tag: 'Total Supply',
    text: '123,456, 789 TKN',
  },
  {
    tag: 'Tokens For Presale',
    text: '9,999,999 ANON',
  },

  {
    tag: 'Tokens For Liquidity',
    text: '9,999,999 ANON',
  },
  {
    tag: 'Soft Cap',
    text: '123456789 ETH',
  },
  {
    tag: 'Presale Start Time',
    text: '01/02/2023',
  },
  {
    tag: 'Presale End Time',
    text: '01/01/2023',
  },
  {
    tag: 'Listing On',
    text: '123456789 ETH',
  },
  {
    tag: 'Liquidity Percent',
    text: '(Manual Listing)',
  },
  {
    tag: 'Liquidity Lockup Time',
    text: '365 days after pool ends',
  },
]

const SingleLaunchpad = () => {
  const [isLike, setIsLike] = useState(false)
  return (
    <div className='bg-[#faf9fa] min-h-screen px-5  pt-20 md:pt-10'>
      <div className='md:mr-[40px] md:ml-[100px] py-5  border-black flex flex-col md:flex-row justify-between gap-4'>
        <div className='bg-[#ffffff] w-full md-w-3/5 px-5 py-10'>
          <div className='flex items-start flex-col md:flex-row gap-4 mb-4'>
            <div className='relative'>
              <img
                className='w-[52px] h-[52px] rounded-full object-cover'
                src={project.img}
                alt=''
              />
              <div className='w-[20px] absolute left-[38px] bottom-[2px]'>
                <img
                  className='w-full object-contain'
                  src={project.icon}
                  alt='coin-icon'
                />
              </div>
            </div>
            <div className='text-xl relative'>
              <p>{project.name}</p>
              <div className='absolute flex gap-1'>
                {project.social.map((so) => {
                  return <div className='text-[#f95e9f]'>{so}</div>
                })}
              </div>
            </div>
            <div className='mt-5 md:mt-0 flex gap-2'>
              <div>
                {project.audit === true && (
                  <div className='bg-[#00bcd4] text-white px-2 py-1 rounded-md text-sm'>
                    Audit
                  </div>
                )}
              </div>
              <div>
                {project.kyc === true && (
                  <div className='bg-[#49c774] text-white px-2 py-1 rounded-md text-sm'>
                    KYC
                  </div>
                )}
              </div>
            </div>
            <div className='md:ml-auto flex gap-3'>
              <button
                onClick={() => setIsLike(!isLike)}
                className='bg-[#11111111] rounded-full px-2 py-2'
              >
                {isLike ? (
                  <BsSuitHeartFill className='text-[#8B4513]' />
                ) : (
                  <BsSuitHeart className='text-[#8B4513]' />
                )}{' '}
              </button>
              <div className='flex items-center gap-2 bg-background px-2 py-1 rounded-2xl'>
                <div className='dot'></div>
                <span className={'text-sm font-semibold pr-4 text-[#8B4513]'}>
                  {project.upcoming ? 'Upcoming' : 'Sale Live'}
                </span>
              </div>
            </div>
          </div>
          <p className='mb-5'>{project.desc}</p>
          <div>
            {lineList.map((line) => {
              return (
                <Line
                  className={'text-sm py-2 flex-col md:flex-row'}
                  tag={line.tag}
                  text={line.text}
                  info={line?.info}
                  wallet={line?.wallet}
                />
              )
            })}
          </div>
        </div>
        <div className='md:w-2/5 w-full flex flex-col justify-between'>
          <div className='bg-white  p-5 rounded-md'>
            <div className='text-center'>
              <span className='border-2 border-[#fff0bf] text-sm bg-[#fffbe6] py-2 px-3 rounded-sm '>
                Make sure the website is sirius.com!
              </span>
            </div>
            <div className='text-center mt-5'>
              <p>Presale Ends In</p>
              <div className='flex justify-center gap-5 items-center my-2'>
                <div className='rounded-md px-3 py-2 bg-[#fdeaf1] font-semibold'>
                  05
                </div>
                <div className='rounded-md px-3 py-2 bg-[#fdeaf1] font-semibold'>
                  00
                </div>
                <div className='rounded-md px-3 py-2 bg-[#fdeaf1] font-semibold'>
                  20
                </div>
                <div className='rounded-md px-3 py-2 bg-[#fdeaf1] font-semibold'>
                  12
                </div>
              </div>
            </div>
            <div className='rounded-xl overflow-hidden h-4 w-full bg-[#f5f5f5] mt-5'>
              <div
                style={{ width: `${project.progress}px` }}
                className={`h-full rounded-xl bg-[#49c774]`}
              ></div>
            </div>
            <div className='flex justify-between text-sm'>
              <span>{project.progress} BNB</span>
              <span>50 BNB</span>
            </div>
            <div className='mt-5'>
              <label className='font-semibold text-sm' htmlFor='amount'>
                Amount
              </label>
              <div className='relative w-full mt-1 mb-4'>
                <input
                  placeholder='0.02'
                  type='text'
                  className='w-full border-2 py-1 pl-2 rounded-md'
                />
                <button className='absolute bottom-1/2 right-2 translate-y-1/2 text-[#8B4513] font-semibold'>
                  MAX
                </button>
              </div>
              <button className='bg-[#8B4513] flex items-center px-4 py-1 gap-2 rounded-md text-primary text-sm'>
                <BsCheck size={20} />
                <span>Buy with BNB</span>
              </button>
            </div>
          </div>
          <div className='bg-white p-5 rounded-md'>
            <Line className={'text-sm'} tag={'Status'} text={project.status} />
            <Line
              className={'text-sm'}
              tag={'Current Rate'}
              text={project.rate}
            />
            <Line
              className={'text-sm'}
              tag={'Total Contributors'}
              text={project.contributors}
            />
            <Line
              className={'text-sm'}
              tag={'You Purchased'}
              text={project.purchased}
            />
          </div>
          <div className='bg-white rounded-md'>
            <div className=' p-5 flex justify-between border-b-2 pb-5'>
              <span>NewsLetter</span>
              <div>
                <input type='checkbox' className='mr-2' />
                <label htmlFor=''>Never show again</label>
              </div>
            </div>
            <div className='p-3 px-5'>
              <span className='text-sm'>
                Sign up our mailing list to receive our new presales
              </span>
            </div>
            <form className='px-5 pb-5'>
              <input
                placeholder='Enter your email address'
                type='text'
                className='w-full border-2 py-1 pl-2 rounded-md mb-2'
              />
              <button className='bg-[#8B4513] flex items-center px-4 py-1 gap-2 rounded-md text-primary text-sm'>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleLaunchpad
