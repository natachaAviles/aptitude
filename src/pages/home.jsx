import React from 'react';
import { useState, useEffect } from 'react';

import { replayGame } from '../services/api';

import HomeHeader from '../components/home_header';
import Button from '../components/button';
import Game from '../components/game';
import Score from '../components/score';


function HomePage () {
	const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
	const [selected, setSelected] = useState([])
	const [turns, setTurns] = useState(0)
	const [points, setPoints] = useState(0)

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

	const randomize = () => {
		const newData = [...data]
		const sortedCharacters = newData.sort(() => Math.random() - 0.5)

		setData(sortedCharacters)

		setTimeout(() => {
			const modifiedData = sortedCharacters.map((item) => {
				return { ...item, flipped: false }
			})

			setData(modifiedData)
		}, 3000);
	};

	const flipCard = (index, character) => {
		if (character.matched || character.flipped || selected.length > 1) return

		setSelected(prevState => {
      const { name } = character
      return [...prevState, {name, index}];
    })

		const foundObject = selected.some(item => item.name === character.name)

		if(selected.length === 1) setTurns(turns + 1)

		if (!foundObject && selected.length === 1) {
			setTimeout(() => {
				setSelected([])
			}, 1000);
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

	const isGameFinished = data.every((character) => 'matched' in character) && !loading

  return (
    <div className='container'>
			<img src='src/assets/logo.png' />
			<div className='game__title'>Juego de memoria</div>
      <div className='container-content'>
				{isGameFinished ? 
					<Score turns={turns} /> 
					: <>
						<HomeHeader turns={turns} points={points} />
						<Game characters={data} selected={selected} flipCard={flipCard} />
						<div className='button__container'>
							<Button text='Jugar' onClick={() => randomize()}/>
						</div>
					</>
				}
	  	</div>
    </div>
  );
}

export default HomePage;
