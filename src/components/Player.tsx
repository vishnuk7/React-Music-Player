import React, { useContext, useState } from 'react';
import { FiPlay, FiSkipBack, FiSkipForward, FiPause } from 'react-icons/fi';
import { PlayingContext } from '../contexts/PlayingContext';

import { playingSongContextType } from '../types/Song.td';

interface ISongInfo {
	currentTime: number;
	duration: number;
}

const Player: React.FC = () => {
	const [songInfo, setSongInfo] = useState<ISongInfo>({ currentTime: 0, duration: 0 });

	const { currentSong, isPlaying, playingToggle, audioRef } = useContext<playingSongContextType>(PlayingContext);

	const formatTime = (time: number): string => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 10)).slice(-2);

	const updateTimeHandler = (e: React.ChangeEvent<HTMLAudioElement>) => {
		const duration = e.target.duration;
		const currentTime = e.target.currentTime;
		setSongInfo({ currentTime, duration });
	};

	const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (audioRef!.current !== null) audioRef!.current.currentTime = parseInt(e.target.value);
	};

	// const onKeyHandler = (e: React.KeyboardEvent<HTMLAudioElement>) => {
	// 	console.log(audioRef);
	// };

	const playerHanlder = () => {
		if (audioRef!.current !== null) {
			if (isPlaying) {
				audioRef!.current.pause();
				if (playingToggle !== undefined) playingToggle();
			} else {
				audioRef!.current.play();
				if (playingToggle !== undefined) playingToggle();
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
				<FiSkipBack size={'1.5em'} className='skip-backward' />
				{isPlaying ? (
					<FiPause onClick={playerHanlder} size={'1.5em'} className='play' />
				) : (
					<FiPlay onClick={playerHanlder} size={'1.5em'} className='play' />
				)}

				<FiSkipForward size={'1.5em'} className='skip-forward' />
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
