import React from 'react';
import Player from './components/Player';
import Song from './components/Song';
import { SongProvider } from './contexts/SongContext';

import './styles/app.scss';

const App: React.FC = () => {
	return (
		<div>
			<SongProvider>
				<Song />
			</SongProvider>
			<Player />
		</div>
	);
};

export default App;
