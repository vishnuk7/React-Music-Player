import React, { useRef, useContext, useState } from 'react';
import { FiPlay, FiSkipBack, FiSkipForward, FiPause } from 'react-icons/fi';
import { PlayingContext } from '../contexts/PlayingContext';
import useToggle from '../hooks/useToggle';
import { playingSongContext } from '../types/Song.td';

interface ISongInfo {
	currentTime: number;
	duration: number;
}

const Player: React.FC = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, toggle] = useToggle();
	const [songInfo, setSongInfo] = useState<ISongInfo>({ currentTime: 0, duration: 0 });

	const { currentSong, setCurrentSong } = useContext<playingSongContext>(PlayingContext);

	const formatTime = (time: number): string => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 10)).slice(-2);

	const updateTimeHandler = (e: React.ChangeEvent<HTMLAudioElement>) => {
		const duration = e.target.duration;
		const currentTime = e.target.currentTime;
		setSongInfo({ currentTime, duration });
	};

	const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (audioRef.current !== null) audioRef.current.currentTime = parseInt(e.target.value);
	};

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

	return (
		<div className='player-container'>
			<div className='time-control'>
				<p>{formatTime(songInfo.currentTime)}</p>
				<input
					type='range'
					min={0}
					max={songInfo.duration}
					value={songInfo.currentTime}
					onChange={dragHandler}
				/>
				<p>{formatTime(songInfo.duration)}</p>
			</div>
			<div className='play-control'>
				<FiSkipBack size={'1.5rem'} className='skip-backward' />
				{isPlaying ? (
					<FiPause onClick={playerHanlder} size={'1.5rem'} className='play' />
				) : (
					<FiPlay onClick={playerHanlder} size={'1.5rem'} className='play' />
				)}

				<FiSkipForward size={'1.5rem'} className='skip-forward' />
				<audio
					onLoadedMetadata={updateTimeHandler}
					onTimeUpdate={updateTimeHandler}
					ref={audioRef}
					src={currentSong.audio}></audio>
			</div>
		</div>
	);
};

export default Player;
