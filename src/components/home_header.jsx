import React from 'react';

function HomeHeader (props) {
	const { turns, points } = props

  return (
    <>
			<h1 className='title'>Personajes</h1>
			<div className='game__header'>
				<p>Aciertos: {points}</p>
				<p>Turnos: {turns}</p>
			</div>
    </>
  );
}

export default HomeHeader;
