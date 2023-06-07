import React, { useState, useEffect } from 'react'

const TypingEffect = () => {
  const [text, setText] = useState('')
  const word = '$SIRIUS'
  const typingSpeed = 100

  useEffect(() => {
    const handleTyping = () => {
      if (text === word) return

      setText((prevText) =>
        prevText === word ? prevText : word.substring(0, prevText.length + 1)
      )
    }

    const typingTimer = setInterval(handleTyping, typingSpeed)

    return () => {
      clearInterval(typingTimer)
    }
  }, [text, word])

  return <h1 className='bg-white typing-effect'>{text}</h1>
}

export default TypingEffect
