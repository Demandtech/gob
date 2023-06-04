const Input = ({ type, placeholder, label, name }) => {
  return (
    <div className='mb-3 input-control'>
      {type !== 'checkbox' && (
        <label className='pb-2 block text-background text-xl' htmlFor={name}>
          {label}{' '}
        </label>
      )}
      <div className='flex items-center space-x-2 relative'>
        <input
          placeholder={placeholder}
          className={`${
            type !== 'checkbox' ? 'w-full' : ''
          } border border-gray700 p-2`}
          type={type}
          name={name}
        />
        {name === 'amount' && (
          <button className='text-primary-btn absolute right-5'>Max</button>
        )}
        <div>
          {type === 'checkbox' && (
            <label className='text-background' htmlFor={name}>
              {label}{' '}
            </label>
          )}
        </div>
      </div>
      {name === 'amount' && (
        <p className='text-primary-btn mt-2'> Remaining tokens: 9999</p>
      )}
    </div>
  )
}

export default Input
