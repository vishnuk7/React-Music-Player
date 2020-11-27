import React, { useContext } from 'react';
import { PlayingContext } from '../contexts/PlayingContext';
import { playingSongContextType } from '../types/Song.td';

const Song: React.FC = () => {
	const { currentSong } = useContext<playingSongContextType>(PlayingContext);
	return (
		<div className='song-container'>
			<img src={currentSong.cover} alt={currentSong.name}></img>
			<h2>{currentSong.name}</h2>
			<p>{currentSong.artist}</p>
		</div>
	);
};

export default Song;
