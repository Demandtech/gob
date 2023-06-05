import Button from './Button'
import Input from './Input'

const PresaleThree = ({ onclick }) => {
  return (
    <div className='bg-primary px-10 mt-10 py-10 md:px-20  wrapper'>
      <div>
        <Input
          label={'Enter amount of tokens available for presale'}
          placeholder={0}
        />
        <Input
          label='Presale rate'
          placeholder={0}
          info='1 ETH : X Tokens ratio'
        />
        <p>Whitelist</p>
        <div className='flex gap-2'>
          <Input type='radio' label='Enable' />
          <Input type='radio' label='Disable' />
        </div>
        <p className='text-primary-btn mt-2'>
          You can enable and disable this whenever you want
        </p>
        <div className='w-full'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1'>
              <Input
                info={'Softcap must be >= 25% of Hardcap'}
                placeholder={0}
                label={'Softcap (ETH)'}
              />
            </div>

            <div className='flex-1'>
              <Input placeholder={0} label={'Hardcap (ETH)'} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1'>
              <Input placeholder={0} label={'Minimum buy (ETH)'} />
            </div>
            <div className='flex-1'>
              <Input placeholder={0} label={'Maximum buy (ETH)'} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1'>
              <Input label={'Refund type'} type={'select'} />
            </div>
            <div className='flex-1'>
              <Input label={'Presalerate'} type={'select'} />
            </div>
          </div>

          <div className='flex flex-col md:flex-row'>
            <div className='flex-1'>
              <Input placeholder={0} label={'Liquidity (%)'} />
            </div>
            <div className='flex-1'>
              <Input
                info={'1 ETH = 0 QR68'}
                placeholder={0}
                label={'Listing rate'}
              />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='text-primary-btn mt-2'>
            Enter the percentage of raised funds that should be allocated to
            Liquidity on (Min 51%, Max 100%)
          </p>
          <p className='text-primary-btn mt-2 mb-5'>
            IIf I spend 1 ETH on how many tokens will I receive? Usually this
            amount is lower than presale rate to allow for a higher listing
            price on
          </p>
          <p>Select start time & end time (UTC)</p>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <Input type={'date'} label={'Start time (UTC)'} />
          </div>
          <div className='flex-1'>
            <Input type={'date'} label={'End time (UTC)'} />
          </div>
        </div>
        <Input
          placeholder={0}
          type={'text'}
          label={'Liquidity lockup (Days)'}
        />
      </div>
      <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 justify-center mt-5'>
        <Button onclick={() => onclick('prev')} secondary label='Go Back' />
        <Button onclick={() => onclick('next')} label='Approve Payment' />
      </div>
    </div>
  )
}

export default PresaleThree