import React, { useContext } from 'react';
import { PlayingContext } from '../contexts/PlayingContext';
import { playingSongContext } from '../types/Song.td';
import songs from '../data';

interface Props {
	name: string;
	cover: string;
	artist: string;
	audio?: string;
	color?: string[];
	id: string;
	active?: boolean;
}
const LibraryItem: React.FC<Props> = ({ id, name, cover, artist }) => {
	const { setCurrentSong } = useContext<playingSongContext>(PlayingContext);
	const songSelectHandler = () => {
		const currentSong = songs().find((song) => song.id === id);
		if (currentSong !== undefined) setCurrentSong(currentSong);
	};

	return (
		<div onClick={songSelectHandler} className='library-item'>
			<img src={cover} alt={name} />
			<div className='song-description'>
				<h3>{name}</h3>
				<h4>{artist}</h4>
			</div>
		</div>
	);
};

export default LibraryItem;
