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
	const { setCurrentSong, isPlaying, audioRef } = useContext<playingSongContext>(PlayingContext);
	const aref = audioRef as React.RefObject<HTMLAudioElement>;
	const songSelectHandler = () => {
		//selecting song
		const currentSong = songs().find((song) => song.id === id);
		if (currentSong !== undefined) setCurrentSong(currentSong);

		//playing the selected song if song is not loaded then wait for it
		if (isPlaying) {
			const playpromise = aref.current?.play();
			if (playpromise !== undefined) {
				playpromise.then(() => aref.current?.play());
			}
		}
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
