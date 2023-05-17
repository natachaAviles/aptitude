import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './button'

import { ROUTES } from '../constants.js'

function Score(props) {
  const { turns, handleStartAgain } = props

  const navigate = useNavigate()

  const handleGoBack = () => navigate(ROUTES.home_route)

  return (
    <div className='score'>
      <h1>¡Felicitaciones!</h1>
      <p>Terminaste el juego con {turns} turnos</p>
      <div className='buttons'>
        <Button onClick={handleStartAgain} text='Repetir' />
        <Button onClick={handleGoBack} text='Inicio' secondary />
      </div>
    </div>
  )
}

export default Score
