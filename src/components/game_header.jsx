import React from 'react'

function GameHeader(props) {
  const { turns, points, type } = props

  return (
    <div className='game__header'>
      {type !== 'game' ?
        <p className='title'>Personajes</p>
        : <>
          <p>Aciertos: {points}</p>
          <p>Turnos: {turns}</p>
        </>
      }
    </div>
  )
}

export default GameHeader
