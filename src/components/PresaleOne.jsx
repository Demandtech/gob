import Input from './Input'
import Button from './Button'
import { useState } from 'react'

const PresaleOne = ({ onclick, onchange }) => {
  
  return (
    <div className='bg-biege px-10  mt-10 py-10 md:px-28  wrapper'>
      <Input
        type='text'
        placeholder='Ex: 0x123456789ABCDEF'
        info='Pool creation fee: 1.23 TKN'
        name='pool'
        onChange={onchange}
      />
      <div className='pl-1'>
        <Input
          type={'radio'}
          name={'currency'}
          label={'ETH'}
          onChange={onchange}
          value={'ETH'}
        />
        <Input type={'radio'} name={'currency'} label={'USDC'} value={'USDC'} />
        <Input
          onChange={onchange}
          name={'currency'}
          type={'radio'}
          label={'USDT'}
          info={'Your users will pay with ETH for your token'}
        />
      </div>
      <div className='text-center mt-5'>
        <Button onclick={() => onclick('next')} label={'Approve Token'} />
      </div>
    </div>
  )
}

export default PresaleOne
