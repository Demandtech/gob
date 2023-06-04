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
  console.log(projects)
  return (
    <div className=' border flex justify-between bg-primary p-5 mt-5 rounded-md flex-col md:flex-row shadow-md gap-5'>
      {projects.map((pro, index) => {
        return (
          <div key={index} className='text-center shadow-md p-3 rounded-md'>
            <h2 className='font-bold text-3xl text-[#031217]'>{pro.count}</h2>
            <p>{pro.text}</p>
          </div>
        )
      })}
    </div>
  )
}
