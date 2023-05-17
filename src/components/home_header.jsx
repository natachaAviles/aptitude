import React from 'react'

function HomeHeader(props) {
  const { turns, points, type } = props

  return (
    <div style={{ with: '100%' }} className='game__header'>
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

export default HomeHeader
