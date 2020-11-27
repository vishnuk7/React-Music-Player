import React from 'react';

interface Props {
	name: string;
	cover: string;
	artist: string;
	audio?: string;
	color?: string[];
	id?: string;
	active?: boolean;
}
const LibraryItem: React.FC<Props> = ({ name, cover, artist }) => {
	return (
		<div className='library-item'>
			<img src={cover} alt={name} />
			<div className='song-description'>
				<h3>{name}</h3>
				<h4>{artist}</h4>
			</div>
		</div>
	);
};

export default LibraryItem;
