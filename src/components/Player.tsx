import React, { useContext, useState } from 'react';
import { FiPlay, FiSkipBack, FiSkipForward, FiPause } from 'react-icons/fi';
import { PlayingContext } from '../contexts/PlayingContext';
import { SongContext } from '../contexts/SongsContext';

import { playingSongContextType } from '../types/Song.td';

interface ISongInfo {
	currentTime: number;
	duration: number;
}

const Player: React.FC = () => {
	const [songInfo, setSongInfo] = useState<ISongInfo>({ currentTime: 0, duration: 0 });

	const { currentSong, isPlaying, playingToggle, audioRef } = useContext(PlayingContext);
	const songs = useContext(SongContext).songs!;
	const setCurrentSong = useContext(PlayingContext).setCurrentSong!;

	const formatTime = (time: number): string => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 10)).slice(-2);

	const updateTimeHandler = (e: React.ChangeEvent<HTMLAudioElement>) => {
		const duration = e.target.duration;
		const currentTime = e.target.currentTime;
		setSongInfo({ currentTime, duration });
	};

	const skipHandler = (direction: string) => {
		const index = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === 'skip-backward') {
			if (index - 1 < 0) {
				setCurrentSong(songs[songs.length - 1]);
			} else {
				setCurrentSong(songs[index - 1]);
			}
		} else if (direction === 'skip-forward') {
			setCurrentSong(songs[(index + 1) % songs.length]);
		}
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
					max={songInfo.duration || 0}
					value={songInfo.currentTime}
					onChange={dragHandler}
				/>
				<p>{formatTime(songInfo.duration)}</p>
			</div>
			<div className='play-control'>
				<FiSkipBack onClick={() => skipHandler('skip-backward')} size={'1.5em'} className='skip-backward' />
				{isPlaying ? (
					<FiPause onClick={playerHanlder} size={'1.5em'} className='play' />
				) : (
					<FiPlay onClick={playerHanlder} size={'1.5em'} className='play' />
				)}

				<FiSkipForward onClick={() => skipHandler('skip-forward')} size={'1.5em'} className='skip-forward' />
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
