const projects = [
  {
    count: '$481.1M',
    text: 'Total Liquidity Raised',
  },
  {
    count: 15323,
    text: 'Total Projects',
  },
  {
    count: '$1.6M',
    text: 'Total Participants',
  },
  {
    count: '$256.4M',
    text: 'Total Values locked',
  },
]

export const Counter = () => {
  return (
    <div className='bg-white flex justify-between  p-5 mt-5 rounded-xl flex-col md:flex-row shadow-md gap-5 counterEl'>
      {projects.map((pro, index) => {
        return (
          <div key={index} className='text-center shadow-md p-3 rounded-md flex-1'>
            <h2 className='font-bold text-3xl text-[#031217]'>{pro.count}</h2>
            <p>{pro.text}</p>
          </div>
        )
      })}
    </div>
  )
}
