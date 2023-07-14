import { useLocation } from 'react-router-dom'

const data = [
  {
    text: 'Verify Token',
    num: 1,
    path: '/create-launchpad',
  },
  {
    text: 'Defi Launchpad Info',
    num: 2,
    path: '/create-launchpad/step-two',
  },
  {
    text: 'Defi Launchpad Info',
    num: 3,
    path: '/create-launchpad/step-three',
  },
  {
    text: 'Finish',
    num: 4,
    path: '/create-launchpad/final-step',
  },
]

const TabsNavigate = () => {
  const location = useLocation()
  const currentPath = location.pathname

  
  return (
    <div className='flex  justify-between flex-col items-center  lg:flex-row relative gap-3 text-primary'>
      {data.map((d, index) => {
        return (
          <div
            key={index}
            className={'flex z-10  items-center gap-3 bg-[#100702] px-3'}
          >
            <div
              className={`w-8 h-8 grid place-content-center border-2 rounded-full  leading-6 font-bold ${
                currentPath === d.path
                  ? 'gold-bg  active-tab border-[#ccb089]'
                  : 'border-primary'
              }`}
            >
              {d.num}
            </div>
            <span className='leading-6'>{d.text}</span>
          </div>
        )
      })}

      <div className='absolute w-0.5 top-0 bottom-0 bg-primary lg:left-0 lg:right-0 lg:w-full lg:h-0.5 lg:translate-y-1/2 lg:top-1/2 ml-5 lg:ml-0' />
    </div>
  )
}

export default TabsNavigate
