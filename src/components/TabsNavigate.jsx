
const data = [
  {
    text: 'Verify Token',
    num: 1,
  },
  {
    text: 'Defi Launchpad Info',
    num: 2,
  },
  {
    text: 'Defi Launchpad Info',
    num: 3,
  },
  {
    text: 'Finish',
    num: 4,
  },
]

const TabsNavigate = ({elIndex}) => {
  return (
    <div className='flex justify-between flex-col items-center  md:flex-row relative gap-3 text-primary'>
      {data.map((d, index) => {
        return (
          <div
            key={index}
            className={'flex z-10 items-center gap-3 bg-[#100702] px-3'}
          >
            <div
              className={`w-8 h-8 grid place-content-center border-2 rounded-full border-primary leading-6 font-bold ${
                elIndex === index ? 'bg-[#ccb089] border-secondary-btn ' : ''
              }`}
            >
              {d.num}
            </div>
            <span className='leading-6'>{d.text}</span>
          </div>
        )
      })}

      <div className='absolute w-0.5 top-0 bottom-0 bg-primary md:left-0 md:right-0 md:w-full md:h-0.5 md:translate-y-1/2 md:top-1/2' />
    </div>
  )
}

export default TabsNavigate
