import Button from "./Button"

const PresaleFour = ({onclick}) => {
  return (
    <div>
      <div className='flex gap-5 justify-center'>
        <Button secondary label='Back' onclick={()=>onclick('prev')}/>
        <Button label='Approve Payment' onclick={() => onclick('done')} />
      </div>
    </div>
  )
}

export default PresaleFour