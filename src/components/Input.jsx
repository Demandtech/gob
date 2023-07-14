import { useState } from 'react'
const Input = ({
  type,
  placeholder,
  label,
  name,
  info,
  onchange,
  value,
  className,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState()
  if (type === 'radio') {
    return (
      <div className='form-control'>
        <div className=' flex w-full items-center gap-2 relative focus:-translate-y-1'>
          <input
            placeholder={placeholder}
            className={`w-full border border-gray700 p-2 scale-150`}
            type={type}
            name={name}
            onChange={onchange}
            value={value}
          />
          {name === 'amount' && (
            <button className='text-primary-btn absolute right-5'>Max</button>
          )}
          <div>
            <label className='text-dark' htmlFor={name}>
              {label}{' '}
            </label>
          </div>
        </div>
        {info && <p className='text-primary-btn mt-2'>{info}</p>}
      </div>
    )
  }

  return (
    <>
      <div className=' input-control w-full'>
        {type !== 'checkbox' && (
          <label className={`pb-1 block text-dark ${className}`} htmlFor={name}>
            {label}{' '}
          </label>
        )}
        <div className='flex items-center gap-3 relative focus:-translate-y-1'>
          <input
            placeholder={placeholder}
            className={`${
              type !== 'checkbox' ? 'w-full' : ''
            }  border border-gray700 p-2`}
            type={type}
            name={name}
            onChange={onchange}
            value={value}
          />
          {name === 'amount' && (
            <button className='text-primary-btn absolute right-5'>Max</button>
          )}
          <div>
            {type === 'checkbox' && (
              <label className='text-dark' htmlFor={name}>
                {label}{' '}
              </label>
            )}
            {type === 'radio' && (
              <label className='text-background' htmlFor={name}>
                {label}{' '}
              </label>
            )}
          </div>
        </div>
        {info && <p className='text-primary-btn mt-2'>{info}</p>}
      </div>
    </>
  )
}

export default Input
