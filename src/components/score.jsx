import React from 'react'

import Button from './button'

function Score (props) {
	const { turns } = props

  return (
		<div className='score'>
			<h1>¡Felicitaciones!</h1>
			<p>Terminaste el juego con {turns} turnos</p>
			<div className='buttons'>
				<Button text='Repetir' />
				<Button text='Inicio' secondary />
			</div>
	 </div>
  )
}

export default Score
