import React from 'react';

const CharacterCard = React.forwardRef((props) => {
	const { onClick, isFlipped, character } = props
	const { name, species, status, image } = character

  return (
    <div onClick={onClick} className={`card ${isFlipped ? 'card--flipped' : ''}`}>
			<div className='card__front'>
				<img src={image} className='card__image' />
				<p className='card__title'>{name}</p>
				<p className='card__description'>{species} - {status}</p>
			</div>
			<div className='card__back'>
				<img src='src/assets/back_card.png' />
			</div>
    </div>
  );
})

export default CharacterCard;
