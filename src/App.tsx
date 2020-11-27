import React from 'react';
import Library from './components/Library';
import Navbar from './components/NavBar';
import Player from './components/Player';
import Song from './components/Song';
import { LibraryProvider } from './contexts/LibraryContext';
import { PlayingProvider } from './contexts/PlayingContext';
import { SongProvider } from './contexts/SongsContext';

import './styles/app.scss';

const App: React.FC = () => {
	return (
		<div className='app'>
			<SongProvider>
				<PlayingProvider>
					<LibraryProvider>
						<Navbar />
						<Library />
					</LibraryProvider>
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
