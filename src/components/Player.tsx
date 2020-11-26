import React, { useRef, useContext } from 'react';
import { FiPlay, FiSkipBack, FiSkipForward } from 'react-icons/fi';
import { SongContext } from '../contexts/SongContext';
import useToggle from '../hooks/useToggle';

const Player: React.FC = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, toggle] = useToggle();
	const playerHanlder = () => {
		if (audioRef.current !== null) {
			if (isPlaying) {
				audioRef.current.pause();
				toggle();
			} else {
				audioRef.current.play();
				toggle();
			}
		}
	};
	const [currentSong] = useContext(SongContext);

	return (
		<div className='player-container'>
			<div className='time-control'>
				<p>start time</p>
				<input type='range' />
				<p>End time</p>
			</div>
			<div className='play-control'>
				<FiSkipBack size={'1.5rem'} className='skip-backward' />
				<FiPlay onClick={playerHanlder} size={'1.5rem'} className='play' />
				<FiSkipForward size={'1.5rem'} className='skip-forward' />
				<audio ref={audioRef} src={currentSong.audio}></audio>
			</div>
		</div>
	);
};

export default Player;
