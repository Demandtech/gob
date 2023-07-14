import { Input, Button } from '../components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StepOne = () => {
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  const onsubmit = (event) => {
    event.preventDefault()
    if (token) {
      navigate('/create-launchpad/step-two')
    }
    return
  }

  const onchangeText = (event) => {
    setToken(event.target.value)
  }

  
  return (
    <div className='gold-bg px-10  mt-10 py-10 rounded-md md:px-28  wrapper'>
      <Input
        type='text'
        placeholder='Ex: 0x123456789ABCDEF'
        info='Pool creation fee: 1.23 TKN'
        name='pool'
        value={token}
        onchange={(e) => onchangeText(e)}
      />
      <div className='pl-1'>
        <Input
          type={'radio'}
          name={'currency'}
          label={'ETH'}
          onChange={'onchange'}
          value={'ETH'}
        />
        <Input
          type={'radio'}
          onChange={'onchange'}
          name={'currency'}
          label={'USDC'}
          value={'USDC'}
        />
        <Input
          onChange={'onchange'}
          name={'currency'}
          type={'radio'}
          label={'USDT'}
          value={'USDT'}
          info={'Your users will pay with ETH for your token'}
        />
      </div>
      <div className='text-center mt-5'>
        <Button type='submit' onclick={onsubmit} label={'Approve Token'} />
      </div>
    </div>
  )
}

export default StepOne
