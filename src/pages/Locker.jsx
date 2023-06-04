import Layout from '../components/Layout'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'

const Locker = () => {
  return (
    <Layout>
      <Header page='Locker' title={'Create your lock'} />
      <div className='bg-primary p-10'>
        <Input
          type='text'
          placeholder='Enter Token or LP Address'
          label='Token or LP Token Address'
          name='token'
        />
        <Input type='checkbox' label='Use other owner' name='owner' />

        <Input type='text' placeholder='Ex:My lock' label='Title' />

        <Input
          label='Amount'
          type='text'
          placeholder='Amount'
          name='amount'
          info={' Remaining tokens: 9999'}
        />
        <Input type='checkbox' label='Use vesting' name={'vesting'} />
        <Input
          label='Lock until (UTC time)'
          type='date'
          placeholder='Select Date'
        />
        <div className='text-center mt-10'>
          <div className='text-center'>
            <Button label={'Approve Token'} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Locker
