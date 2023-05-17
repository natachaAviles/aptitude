import React from 'react'

function Button (props) {
	const { onClick, text, secondary } = props

  return (
    <button
      onClick={onClick}
      className={`button ${secondary ? 'button--secondary' : ''}`}
    >
      {text}
    </button>
  )
}

export default Button
