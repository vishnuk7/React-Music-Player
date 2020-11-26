import React from 'react';
import { FiPlay, FiSkipBack, FiSkipForward } from 'react-icons/fi';

const Player: React.FC = () => {
	return (
		<div className='player-container'>
			<div className='time-control'>
				<p>start time</p>
				<input type='range' />
				<p>End time</p>
			</div>
			<div className='play-control'>
				<FiSkipBack size={'1.5rem'} className='skip-backward' />
				<FiPlay size={'1.5rem'} className='play' />
				<FiSkipForward size={'1.5rem'} className='skip-forward' />
			</div>
		</div>
	);
};

export default Player;
