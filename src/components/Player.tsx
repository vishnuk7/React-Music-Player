import React, { useContext, useState } from 'react';
import { FiPlay, FiSkipBack, FiSkipForward, FiPause, FiRepeat, FiShuffle, FiVolume2, FiVolumeX } from 'react-icons/fi';
import Slider from 'react-input-slider';
import { usePalette } from 'react-palette';
import { PlayingContext } from '../contexts/PlayingContext';
import { SongContext } from '../contexts/SongsContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Mousetrap = require('mousetrap');

interface ISongInfo {
	currentTime: number;
	duration: number;
}

const Player: React.FC = () => {
	const [songInfo, setSongInfo] = useState<ISongInfo>({ currentTime: 0, duration: 0 });

	const { isDark } = useContext(ThemeContext);

	const {
		currentSong,
		isPlaying,
		playingToggle,
		audioRef,
		isRepeate,
		toggleRepeate,
		isShuffle,
		toggleShuffle,
	} = useContext(PlayingContext);
	const songs = useContext(SongContext).songs!;
	const setCurrentSong = useContext(PlayingContext).setCurrentSong!;

	const { data } = usePalette(currentSong.cover);

	const formatTime = (time: number): string => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);

	let currentShuffle: number = songs.findIndex((s) => s.id === currentSong.id);
	const [playingList, setPlayingList] = useState([currentShuffle]);
	const [pointer, setPointer] = useState(0);

	const [volume, setVolume] = useState(100);

	const updateTimeHandler = (e: React.ChangeEvent<HTMLAudioElement>) => {
		const duration = e.target.duration;
		const currentTime = e.target.currentTime;
		setSongInfo({ currentTime, duration });
	};

	const skipHandler = async (direction: string) => {
		const index = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === 'skip-backward') {
			if (isShuffle) {
				let updatePointer = pointer - 1;
				if (updatePointer < 0) {
					await setCurrentSong(songs[playingList[playingList.length - 1]]);
					setPointer(playingList.length - 1);
				} else {
					await setCurrentSong(songs[playingList[updatePointer]]);
					setPointer(updatePointer);
				}
			} else if (index - 1 < 0) {
				await setCurrentSong(songs[songs.length - 1]);
				if (isPlaying && audioRef!.current !== null) {
					audioRef!.current.play();
				}
				return;
			} else {
				await setCurrentSong(songs[index - 1]);
			}
		} else if (direction === 'skip-forward') {
			if (isShuffle) {
				let updatePointer = pointer + 1;
				if (updatePointer === playingList.length) {
					updatePointer = 0;
				}
				console.log(updatePointer);
				await setCurrentSong(songs[playingList[updatePointer]]);
				setPointer(updatePointer);
			} else {
				await setCurrentSong(songs[(index + 1) % songs.length]);
			}
		}
		if (isPlaying && audioRef!.current !== null) {
			audioRef!.current.play();
		}
	};

	const dragHandler = (x: number) => {
		if (audioRef!.current !== null) audioRef!.current.currentTime = x;
	};

	const endedHandler = () => {
		if (audioRef!.current !== null && isRepeate) {
			audioRef!.current.currentTime = 0;
			audioRef!.current.play();
		} else skipHandler('skip-forward');
	};

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

	const shuffleHandler = () => {
		if (toggleShuffle !== undefined) toggleShuffle();
		if (!isShuffle) {
			while (playingList.length !== songs.length) {
				const randnum = Math.floor(Math.random() * songs.length);
				if (!playingList.some((p) => p === randnum)) {
					playingList.push(randnum);
				}
			}
		} else {
			while (playingList.length !== 0) {
				playingList.pop();
			}
			setPlayingList([currentShuffle]);
		}
	};

	const volumeHandler = (value: number) => {
		if (audioRef!.current !== null) {
			audioRef!.current.volume = value / 100;
			setVolume(value);
		}
	};

	//keyboard events
	Mousetrap.bind('space', () => playerHanlder());
	Mousetrap.bind('right', () => skipHandler('skip-forward'));
	Mousetrap.bind('left', () => skipHandler('skip-backward'));
	Mousetrap.bind('s', () => shuffleHandler());
	Mousetrap.bind('r', toggleRepeate);

	return (
		<div className='player-container'>
			<div className='time-control'>
				<p>{formatTime(songInfo.currentTime)}</p>
				<>
					<Slider
						x={songInfo.currentTime}
						xmin={0}
						xmax={songInfo.duration || 0}
						onChange={({ x }) => dragHandler(x)}
						styles={{
							track: {
								height: '1.5rem',
								width: '100%',
								backgroundColor: 'rgb(204, 204, 204)',
								cursor: 'pointer',
							},
							active: {
								background: `linear-gradient(to right, ${data.vibrant}, ${data.lightVibrant})`,
							},
							thumb: {
								width: 0,
								height: 0,
							},
						}}
					/>
				</>
				<p>{formatTime(songInfo.duration)}</p>
			</div>
			<div className='play-control'>
				<FiShuffle
					onClick={() => shuffleHandler()}
					size={'1.5em'}
					className={`${isShuffle && 'repeate-color'}`}
				/>
				<FiSkipBack onClick={() => skipHandler('skip-backward')} size={'1.5em'} className='skip-backward' />
				{isPlaying ? (
					<FiPause onClick={playerHanlder} size={'1.5em'} className='play' />
				) : (
					<FiPlay onClick={playerHanlder} size={'1.5em'} className='play' />
				)}

				<FiSkipForward onClick={() => skipHandler('skip-forward')} size={'1.5em'} className='skip-forward' />
				<FiRepeat onClick={toggleRepeate} size={'1.5em'} className={`${isRepeate && 'repeate-color'}`} />
				<div className='volume-control'>
					{volume === 0 ? <FiVolumeX size={'1.5em'} /> : <FiVolume2 size={'1.5em'} />}

					<Slider
						axis='x'
						xmin={0}
						xstep={1}
						xmax={100}
						x={volume}
						onChange={({ x }) => volumeHandler(x)}
						styles={{
							track: {
								width: '5rem',
								backgroundColor: 'rgb(204, 204, 204)',
								cursor: 'pointer',
							},
							active: {
								backgroundColor: '#ffac41',
							},
							thumb: {
								backgroundColor: isDark ? ' #eeeeee' : '#222831',
							},
						}}
					/>
				</div>
				<audio
					onLoadedMetadata={updateTimeHandler}
					onTimeUpdate={updateTimeHandler}
					onEnded={endedHandler}
					ref={audioRef}
					src={currentSong.audio}></audio>
			</div>
		</div>
	);
};

export default Player;
