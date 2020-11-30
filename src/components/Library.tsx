import React, { useContext } from 'react';
import { LibraryContext } from '../contexts/LibraryContext';
import { SongContext } from '../contexts/SongsContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { songInfoType } from '../types/Song.td';
import LibraryItem from './LibraryItem';

const Library: React.FC = () => {
	const songsList = useContext(SongContext);
	const { isLibraryOpen } = useContext(LibraryContext);
	const { isDark } = useContext(ThemeContext);
	const songs = songsList.songs as songInfoType[];

	return (
		<div className={`library ${isDark && 'is-dark'} ${isLibraryOpen && 'active'}`}>
			<h2>Library</h2>
			{songs.map((song) => (
				<LibraryItem key={song.id} {...song} />
			))}
		</div>
	);
};

export default Library;
