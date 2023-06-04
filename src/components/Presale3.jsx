import Button from "./Button"

const Presale3 = ({onclick}) => {
  return (
    <div>
      <div className='flex gap-5 justify-center'>
        <Button onclick={()=>onclick('prev')} secondary label='Back' />
        <Button onclick={()=>onclick('next')} label='Approve Payment' />
      </div>
    </div>
  )
}

export default Presale3