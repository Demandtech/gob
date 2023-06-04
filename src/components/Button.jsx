import React from 'react'

const Button = ({ onclick, label, secondary }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className={`bg-secondary-btn text-white px-5 py-2 rounded-md ${
          secondary && 'bg-white text-black'
        }`}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
