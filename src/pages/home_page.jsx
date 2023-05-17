import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { replayGame } from '../services/api'

import Button from '../components/button'
import Game from '../components/game'

import { ROUTES } from '../constants.js'

function HomePage () {
	const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

	const navigate = useNavigate()

	useEffect(() => {
    async function fetchData() {
      try {
        const newData = await replayGame()

				const modifiedData = newData.map((item) => {
					return { ...item, flipped: true }
				})

        setData(modifiedData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
	}, [])
	
	const handleClick = () => navigate(ROUTES.game_route, { state: { data: data } })

	return (
		<>
			<Game characters={data} />
			<Button text='Jugar' onClick={() => handleClick()} />
		</>
  )
}

export default HomePage
