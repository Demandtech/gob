import { useState } from "react"
const Input = ({ type, placeholder, label, name, info, onchange, value }) => {
  const [selectedCurrency, setSelectedCurrency] = useState()
  if (type === 'radio') {
    return (
      <div>
        <div className='flex items-center space-x-2 relative focus:-translate-y-1'>
          <input
            placeholder={placeholder}
            className={`border border-gray700 p-2`}
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
      <div className='mb-3 input-control'>
        {type !== 'checkbox' && (
          <label className='pb-1 block text-dark' htmlFor={name}>
            {label}{' '}
          </label>
        )}
        <div className='flex items-center space-x-2 relative focus:-translate-y-1'>
          <input
            placeholder={placeholder}
            className={`${
              type !== 'checkbox' ? 'w-full' : null
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
