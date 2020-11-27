import React, { useContext } from 'react';
import LibraryItem from './LibraryItem';
import { SongContext } from '../contexts/SongContext';

const Library: React.FC = () => {
	const songs = useContext(SongContext);
	return (
		<div className='library'>
			<h2>Library</h2>
			{songs.map((song) => (
				<LibraryItem {...song} />
			))}
		</div>
	);
};

export default Library;
