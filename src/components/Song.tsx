import React, { useContext } from 'react';
import { SongContext } from '../contexts/SongContext';

const Song: React.FC = () => {
	const [currentSong] = useContext(SongContext);
	return (
		<div className='song-container'>
			<img src={currentSong.cover} alt={currentSong.name}></img>
			<h2>Song Name</h2>
			<p>Artist</p>
		</div>
	);
};

export default Song;
