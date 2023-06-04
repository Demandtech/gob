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
    <div className='flex justify-between flex-col items-center  md:flex-row relative  md:py-2 gap-3 text-primary'>
      {data.map((d, index) => {
        return (
          <div
            key={index}
            className={'flex z-10 items-center gap-2 bg-[#0c2d36] md:px-5 md:first:px-0'}
          >
            <div className={`w-10 h-10 grid place-content-center border-2 rounded-full border-primary ${elIndex === index ? 'bg-secondary-btn border-secondary-btn' : ''}`}>
              {d.num}
            </div>
            <span className='first:pr-5'>{d.text}</span>
          </div>
        )
      })}

      <div className='absolute w-0.5 top-0 bottom-0 bg-primary md:left-0 md:right-0 md:w-full md:h-0.5 md:translate-y-1/2 md:top-1/2' />
    </div>
  )
}

export default TabsNavigate
