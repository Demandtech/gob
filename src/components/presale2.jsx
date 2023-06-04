import Button from './Button'

const presale2 = ({ onclick }) => {
  return (
    <div>
      <div className='flex gap-5 justify-center'>
        <Button onClick={() => onclick('prev')} secondary label='Back' />
        <Button onclick={() => onclick('next')} label='Approve Payment' />
      </div>
    </div>
  )
}

export default presale2
