import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Game from '../components/game'
import Score from '../components/score'

function GamePage() {
	const location = useLocation()
	const locationData = location.state?.data

	const [data, setData] = useState([])
	const [selected, setSelected] = useState([])
	const [turns, setTurns] = useState(0)
	const [points, setPoints] = useState(0)

	useEffect(() => {
		if (locationData.length > 0) {
			setData(locationData)
			randomize()
		}
	}, [locationData])

	const randomize = () => {
		const newData = [...locationData]
		const sortedCharacters = newData.sort(() => Math.random() - 0.5)

		setData(sortedCharacters)

		setTimeout(() => {
			const modifiedData = sortedCharacters.map((item) => {
				return { ...item, flipped: false }
			})

			setData(modifiedData)
		}, 3000)
	}

	const flipCard = (index, character) => {
		if (character.matched || character.flipped || selected.length > 1) return

		setSelected(prevState => {
      const { name } = character
      return [...prevState, {name, index}]
    })

		const foundObject = selected.some(item => item.name === character.name)

		if(selected.length === 1) setTurns(turns + 1)

		if (!foundObject && selected.length === 1) {
			setTimeout(() => {
				setSelected([])
			}, 1000)
		} else if (foundObject) {
			setTimeout(() => {
				setData(prevData => {
					return prevData.map(item => {
						if (item.name === character.name) {
							setPoints(points + 1)
							return {
								...item,
								matched: true,
							}
						} else {
							setTurns(turns + 1)
							setSelected([])
						}
						return item
					})
				})
			}, 1000)
		}
	}

	const isGameFinished = data?.every((character) => 'matched' in character)

  return (
		<>
			{isGameFinished ?
				<Score turns={turns} points={points} />
				: <Game type='game' characters={data} selected={selected} flipCard={flipCard} turns={turns} points={points} />
			}
		</>
  )
}

export default GamePage
