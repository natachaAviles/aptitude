import React from 'react';

import CharacterCard from './character_card';

function Game (props) {
	const { characters, selected, flipCard } = props

  return (
		<div className='game'>
			{characters.map((character, _index) => (
				<CharacterCard
					key={_index} 
					character={character} 
					onClick={() => flipCard(_index, character)}
					isFlipped={selected.some(item => item.index === _index) || character.flipped}
					matched={character.matched}
				/>
		))}
	 </div>
  );
}

export default Game;
