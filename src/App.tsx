import React from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import { SongProvider } from './contexts/SongContext';

import './styles/app.scss';

const App: React.FC = () => {
	return (
		<div className='app'>
			<SongProvider>
				<Library />
				<div className='music-player'>
					<Song />
					<Player />
				</div>
			</SongProvider>
		</div>
	);
};

export default App;
