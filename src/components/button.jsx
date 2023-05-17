import React from 'react'

import { getClassModifiers } from '../utils'

function Button (props) {
	const { onClick, text, secondary } = props

  return (
    <button
      onClick={onClick}
      className={getClassModifiers('button', { secondary })}
    >
      {text}
    </button>
  )
}

export default Button
