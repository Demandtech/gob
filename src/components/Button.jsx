const Button = ({ onclick, label, secondary }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className={` px-5 py-2 rounded-md hover:-translate-y-0.5 transition-all duration-200 ${
          secondary
            ? 'bg-white text-black border border-black '
            : 'bg-secondary-btn text-white shadow-md shaow-[rgba(15, 23, 42, 0.3)]'
        }`}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
