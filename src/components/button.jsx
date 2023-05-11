import React from 'react';

function Button (props) {
	const { onClick, text, type } = props

  return (
    <button onClick={onClick} className='game__button'>{text}</button>
  );
}

export default Button;
