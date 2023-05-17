import React from 'react'

import CharacterCard from './character_card'
import GameHeader from './home_header'

function Game(props) {
  const { characters, selected, flipCard, turns, points, type } = props

  return (
    <div className='game'>
      <GameHeader type={type} turns={turns} points={points} />
      <div className='game__grid'>
        {characters.map((character, _index) => (
          <CharacterCard
            key={_index}
            character={character}
            onClick={type === 'game' ? () => flipCard(_index, character) : null}
            isFlipped={selected?.some(item => item.index === _index) || character.flipped}
            matched={character.matched}
          />
        ))}
      </div>
    </div>
  )
}

export default Game
