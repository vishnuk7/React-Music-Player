import React, { useContext } from 'react';
import LibraryItem from './LibraryItem';
import songs from '../data';

const Library: React.FC = () => {
	return (
		<div className='library'>
			<h2>Library</h2>
			{songs().map((song) => (
				<LibraryItem {...song} />
			))}
		</div>
	);
};

export default Library;
