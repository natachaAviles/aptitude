import React from 'react'

import { getClassModifiers } from '../utils'

const CharacterCard = (props) => {
  const { onClick, isFlipped, character } = props
  const { name, species, status, image, matched } = character

  return (
    <div onClick={onClick}
        className={getClassModifiers('card', { flipped: isFlipped, matched })}>
      <div className='card__front'>
        <img src={image} className='card__image' />
        <p className='card__title'>{name}</p>
        <p className='card__description'>{species} - {status}</p>
      </div>
      <div className='card__back'>
        <img src='src/assets/back_card.png' />
      </div>
    </div>
  )
}

export default CharacterCard
