import React from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import { PlayingProvider } from './contexts/PlayingContext';
import { SongProvider } from './contexts/SongsContext';

import './styles/app.scss';

const App: React.FC = () => {
	return (
		<div className='app'>
			<SongProvider>
				<PlayingProvider>
					<Library />
					<div className='music-player'>
						<Song />
						<Player />
					</div>
				</PlayingProvider>
			</SongProvider>
		</div>
	);
};

export default App;
