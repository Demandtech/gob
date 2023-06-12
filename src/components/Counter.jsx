import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const projects = [
  {
    count: '$481.1M',
    text: 'Total Liquidity Raised',
  },
  {
    count: '15,323',
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
  
  useEffect(() => {
    Aos.init({ duration: 150 })
  })
  return (
    <div className='flex justify-between  py-5 mt-5 rounded-xl flex-col md:flex-row gap-5 counterEl'>
      {projects.map((pro, index) => {
        let animation = ''
        if (index == 0) {
          animation = 'fade-right'
        } else if (index == 1) {
          animation = 'fade-down'
        } else if (index == 2) {
          animation = 'fade-up'
        } else if (index == 3) {
          animation = 'fade-left'
        }
        return (
          <div
            data-aos={animation}
            data-aos-easing='linear'
            key={index}
            className='text-center p-3 flex-1 counter-card'
          >
            <h2 className='counter-number font-bold'>{pro.count}</h2>
            <p className='uppercase font-semibold text-[#ccb089] text-sm'>
              {pro.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}
