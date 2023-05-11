import React from 'react';
import { useState, useEffect, useRef, createRef } from 'react';

import CharacterCard from '../components/character_card';
import { replayGame } from '../services/api';

function HomePage () {
	const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
	const [selected, setSelected] = useState([])
	const [turn, setTurns] = useState(null)

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
		setSelected(prevState => {
      if (prevState.length > 1) {
        return prevState;
      } else {
				const { name } = character
        return [...prevState, {name, index}];
      }
    })

		const foundObject = selected.some(item => item.name === character.name)

		if (!foundObject && selected.length <= 1) {
			setTimeout(() => {
				setSelected([])
			}, 1000);
		} else if (foundObject) {
			setTimeout(() => {
				setData(prevState => prevState.filter(item => item.name !== character.name));
			}, 1000);
		}
		
	}

  return (
    <div className='container'>
			<img src='src/assets/logo.png' />
			<div className='game__title'>Juego de memoria</div>
      <div className='container-content'>
			 {data?.map((character, _index) => {
				return (
						<CharacterCard
						key={_index} 
						character={character} 
						onClick={() => flipCard(_index, character)}
						isFlipped={selected.some(item => item.index === _index)}
					/>
				 )
			 })}
			 <button className='game__button'>Jugar</button>
	  	</div>
    </div>
  );
}

export default HomePage;
