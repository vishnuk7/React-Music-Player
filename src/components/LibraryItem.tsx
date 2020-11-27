import React, { useContext } from 'react';
import { PlayingContext } from '../contexts/PlayingContext';
import { songInfoType } from '../types/Song.td';

import { SongContext } from '../contexts/SongsContext';

interface Props {
	name: string;
	cover: string;
	artist: string;
	audio?: string;
	color?: string[];
	id: string;
	active?: boolean;
}

const LibraryItem: React.FC<Props> = ({ id, name, cover, artist, active }) => {
	const { isPlaying } = useContext(PlayingContext);
	const audioRef = useContext(PlayingContext).audioRef!;
	const setCurrentSong = useContext(PlayingContext).setCurrentSong!;

	const songsList = useContext(SongContext);
	const songs = songsList.songs as songInfoType[];

	const songSelectHandler = async () => {
		//selecting song
		const selectedSong = songs.find((song) => song.id === id);

		if (selectedSong !== undefined) {
			await setCurrentSong(selectedSong);
		}

		//playing the selected song if song is not loaded then wait for it
		if (isPlaying && audioRef.current !== null) audioRef.current.play();
	};

	return (
		<div onClick={songSelectHandler} className={`library-item ${active && 'selected'}`}>
			<img src={cover} alt={name} />
			<div className='song-description'>
				<h3>{name}</h3>
				<h4>{artist}</h4>
			</div>
		</div>
	);
};

export default LibraryItem;
