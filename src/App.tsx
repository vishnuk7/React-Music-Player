import React, { useContext } from 'react';

import Library from './components/Library';
import Navbar from './components/NavBar';
import Player from './components/Player';
import Song from './components/Song';
import ThemeModal from './components/ThemeModal';
import { LibraryProvider } from './contexts/LibraryContext';
import { PlayingProvider } from './contexts/PlayingContext';
import { SongProvider } from './contexts/SongsContext';
import { ThemeProvider } from './contexts/ThemeContext';
import PageContent from './PageContent';

import './styles/app.scss';

const App: React.FC = () => {
	return (
		<SongProvider>
			<PlayingProvider>
				<LibraryProvider>
					<ThemeProvider>
						<PageContent>
							<Navbar />
							<Library />
							<div className='music-player'>
								<Song />

								<Player />
							</div>
							<ThemeModal />
						</PageContent>
					</ThemeProvider>
				</LibraryProvider>
			</PlayingProvider>
		</SongProvider>
	);
};

export default App;
