import Button from './Button'
import Input from './Input'

const PresaleFour = ({ onclick }) => {
  return (
    <div className='bg-biege p-10 mt-10  md:px-20  wrapper'>
      <div>
        <Input
          label={'Enter amount of tokens available for presale'}
          placeholder={
            'Enter a brief description for your project (350 characters limit)'
          }
          type={'text-area'}
          info={'0/350'}
        />

        <div className='w-full'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 mb-3'>
              <Input type={'text'} placeholder={0} label={'Upload logo'} />
              <div className='mt-2 ml-1'>
                <Input type={'checkbox'} label={'Upload file instead'} />
              </div>
            </div>

            <div className='flex-1 mb-3'>
              <Input placeholder={0} label={'Hardcap (ETH)'} />
              <div className='mt-2 ml-1'>
                <Input type={'checkbox'} label={'Upload file instead'} />
              </div>
            </div>
          </div>
          <div className='mb-3'>
            <Input
              placeholder={'Ex: t.me/yourlink'}
              type={'text'}
              label={'Telegram Link'}
            />
          </div>

          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 mb-3'>
              <Input placeholder={'Ex: t.co/yourlink'} label={'Twitter Link'} />
            </div>
            <div className='flex-1 mb-3'>
              <Input
                placeholder={'Ex: medium.com/yourmedium'}
                label={'Medium Link'}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <Input
              type={'text'}
              label={'Reddit Link'}
              placeholder={'Ex: t.co/yourlink'}
            />
          </div>
          <div className='flex-1'>
            <Input
              placeholder={'Ex: medium.com/yourmedium'}
              type={'text'}
              label={'Youtube Link'}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 justify-center mt-5'>
        <Button onclick={() => onclick('prev')} secondary label='Go Back' />
        <Button onclick={() => onclick('next')} label='Approve Payment' />
      </div>
    </div>
  )
}

export default PresaleFour
