import Layout from '../components/Layout'
import Header from '../components/Header'
import Input from '../components/Input'
import TopProjectName from '../components/TopProjectName'
import CenterProjectName from '../components/CenterProjectName'
import { Line } from '../components/CenterProjectName'

const ProjectName = () => {
  return (
    <Layout>
      <Header page={'Project Name'} title={'Project Name'} />
      <TopProjectName />
      <CenterProjectName />
      <UserWhiteList />
      <WhiteList />
    </Layout>
  )
}

const UserWhiteList = () => {
  return (
    <div className='text-white pt-10'>
      <h2 className='text-3xl font-bold'>User WhiteList</h2>
      <div className='mt-4 rounded-md bg-[#ccb089] flex items-center flex-col md:flex-row px-5 py-3 gap-4'>
        <h3 className='text-2xl w-full text-black'>Add address to whitelist</h3>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full'>
          <input
            type='text'
            className='rounded-md pl-2 w-full'
            placeholder='Address'
          />
          <button className='w-full md:w-auto hover:-translate-y-0.5 bg-[#100702] text-white px-10 rounded-md  gtransition-all delay-150  text-center'>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

const address = [
  '0x1234567890ABCDEF',
  '0x1234567890ABCDEF',
  '0x1234567890ABCDEF',
  '0x1234567890ABCDEF',
  '0x1234567890ABCDEF',
]

const WhiteList = () => {
  return (
    <div className='bg-[#ccb089] mt-3 rounded-md p-4'>
      <div className='flex justify-between'>
        <h4 className='font-bold'>No.</h4>
        <h4 className='font-bold'>Address</h4>
      </div>
      <div className='bg-[#ccb089]'>
        {address.map((add, ind) => {
          return (
            <Line
              key={ind}
              tag={ind + 1}
              className={'border-black flex-row text-black'}
              text={add}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectName
