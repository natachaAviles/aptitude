import React from 'react';
import { useState, useEffect } from 'react';

import CharacterCard from '../components/character_card';
import { replayGame } from '../services/api';

function HomePage(props) {
	const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
    async function fetchData() {
      try {
        const newData = await replayGame();
        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
	console.log(data)
  return (
    <div className='container'>
			<img src='src/assets/logo.png' />
      <div className='container-content'>
			 {data?.map((character) => {
				 return <CharacterCard character={character} />
			 })}
	  	</div>
    </div>
  );
}

export default HomePage;
