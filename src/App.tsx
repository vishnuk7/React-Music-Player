import React from 'react';
import Library from './components/Library';
import Navbar from './components/NavBar';
import Player from './components/Player';
import Song from './components/Song';
import { LibraryProvider } from './contexts/LibraryContext';
import { PlayingProvider } from './contexts/PlayingContext';
import { SongProvider } from './contexts/SongsContext';
import PageContent from './PageContent';

import './styles/app.scss';

const App: React.FC = () => {
	return (
		<SongProvider>
			<PlayingProvider>
				<LibraryProvider>
					<PageContent>
						<Navbar />
						<Library />
						<div className='music-player'>
							<Song />
							<Player />
						</div>
					</PageContent>
				</LibraryProvider>
			</PlayingProvider>
		</SongProvider>
	);
};

export default App;
