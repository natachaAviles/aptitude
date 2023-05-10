import React from 'react';

function CharacterCard(props) {
	const { name, species, status, image } = props.character

  return (
    <div className='card'>
			<img src={image} className='card__image' />
			<p className='card__title'>{name}</p>
			<p className='card__description'>{species} - {status}</p>
    </div>
  );
}

export default CharacterCard;
