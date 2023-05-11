import React from 'react';
import { useState, useEffect } from 'react';

import { replayGame } from '../services/api';

import HomeHeader from '../components/home_header';
import Button from '../components/button';
import Game from '../components/game';

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
        setData(newData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

	const flipCard = (index, character) => {
		if (character.matched || selected.length > 1) return

		setSelected(prevState => {
      const { name } = character
      return [...prevState, {name, index}];
    })

		const foundObject = selected.some(item => item.name === character.name)

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
					});
				});
			}, 1000)
		}
	}

  return (
    <div className='container'>
			<img src='src/assets/logo.png' />
			<div className='game__title'>Juego de memoria</div>
      <div className='container-content'>
				<HomeHeader turns={turns} points={points} />
			 	<Game characters={data} selected={selected} flipCard={flipCard} />
			<div className='game-button__container'>
				<Button text='Jugar' />
			</div>
	  	</div>
    </div>
  );
}

export default HomePage;
