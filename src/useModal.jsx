import { useState } from 'react'

const useModal = () => {
  const [modal, setModal] = useState(false)

  const handleSetModal = (payload) => {
    console.log(payload)
    setModal(payload)
  }

  return {
    handleSetModal,
    modal,
  }
}

export default useModal
