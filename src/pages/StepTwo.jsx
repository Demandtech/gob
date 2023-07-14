import { useState } from 'react'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

const StepTwo = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [auditor, setauditor] = useState(null)
  const navigate = useNavigate()
  const auditors = [
    'Sample text1',
    'Sample text2',
    'Sample text3',
    'Sample text4',
  ]
  return (
    <div className='gold-bg py-10 px-5 md:p-10 md:px-20 mt-10 wrapper rounded-md'>
      <div className='mb-5 '>
        <p className='text-center md:text-left pb-1 bg-[#FF0b303c] md:px-5 pt-5 rounded-t-md'>
          Audited By:
        </p>
        <div className='bg-[#FF0b303c] flex gap-2 justify-between items-center flex-col md:flex-row mb-2 md:px-5 py-5 rounded-b-md'>
          {auditors.map((auditor, index) => {
            return (
              <button
                className={`border-2 border-secondary-btn rounded-md px-4 py-2 ${
                  index == activeIndex ? 'gold-bg' : ''
                }`}
                key={index}
                onClick={() => {
                 
                  setActiveIndex(index)
                  setauditor(auditor)
                }}
              >
                {auditor}
              </button>
            )
          })}
        </div>
        <p>
          To create the launchpad you must pay 2% of overall tokens to $BASE,
          payment will be charged on ETH
        </p>
      </div>
      <div className='flex gap-5 justify-center mt-5 flex-col items-center md:flex-row'>
        <Button
          onclick={() => navigate('/create-launchpad')}
          secondary
          label='Go Back'
        />
        <Button
          onclick={() => {
            if (auditor) {
              navigate('/create-launchpad/step-three')
            }
          }}
          label='Approve Payment'
        />
      </div>
    </div>
  )
}

export default StepTwo
